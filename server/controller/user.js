const userModel = require("../model/user");
const tokenUtils = require("../utils/token")
// 引入加密模块
const crypto = require('crypto');

// 用户注册判断
const userRegister = async (req, res) => {
    let { username, password } = req.body;
    let data = await userModel.userFind({ username });
    if (data) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "用户名重复",
                status: 2
            }
        })
    } else {
        // 创建加密算法
        const hash = crypto.createHash("sha256");
        // 对数据进行加密
        hash.update(password);

        // 用户登陆状态
        let status = true;
        // 用户注册时间
        let registerTime = new Date().getTime();
        // 用户的随机名称
        let name = Math.random().toString(36).substr(2, 8);
        // 默认用户头像
        let urlPic = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1572263744249&di=1435c301091ec455c977e9cb95a439d4&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01460b57e4a6fa0000012e7ed75e83.png%401280w_1l_2o_100sh.png";
        let saveData = await userModel.userSave({ username, password: hash.digest("hex"), status, registerTime, name, urlPic });
        if (saveData) {
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: "注册成功",
                    status: 1
                }
            })
        }
    }
}
// 用户修改密码判断

// 用户登陆判断
const userLogin = async (req, res) => {
    // 得到username 和password
    let { username, password } = req.body;
    // 查看用户名是否存在
    let userData = await userModel.userFind({ username });
    console.log(userData)
    if (userData) {//如果存在
        /* 
            进行密码和用户名的校验
            密码在数据库中已经加密，
            所以要将密码进行同样的加密在进行比较

         */
        if (userData.status) {
            // 创建加密算法
            const hash = crypto.createHash("sha256");
            // 对数据进行加密
            hash.update(password);
            // 拿到加密后的数据
            // console.log(hash.digest("hex"))
            // 当密码加密以后与数据库密码相同时
            if (userData.password == hash.digest("hex")) {
                // 当登陆成功时候生产token值 并且发送到客户端
                let token = tokenUtils.sendToken({ username });
                res.cookie("token", token)
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "登陆成功",
                        code: 1,
                        data: userData
                    }
                })
            } else {
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "密码错误",
                        code: 2
                    }
                })
            }
        } else {
            res.json({

            })
        }

    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "用户名不存在",
                code: 0
            }
        })
    }
}

const updatePassword = async (req, res) => {
    let { name, oldPassword, newPassword } = req.body;

    // console.log(name)
    let data = await userModel.userOldPassword(name);
    // console.log(data.password)
    if (!data) {

    } else {
        const hashs = crypto.createHash("sha256");
        // 对数据进行加密
        hashs.update(oldPassword);
        // 拿到加密后的数据
        // 当密码加密以后与数据库密码相同时
        if (data.password == hashs.digest("hex")) {
            const has = crypto.createHash("sha256");
            has.update(newPassword);
            let pass = (has.digest("hex"));
            let updatedata = await userModel.UpdatePassword(name, pass);
           
            if (updatedata) {
                 console.log("hello")
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "修改成功",
                        status:1
                    }
                })
            } else {
                res.json({
                    code: 200,
                    errMsg: "",
                    data: {
                        info: "修改失败"
                    }
                })
            }
        }else{
            res.json({
                code: 200,
                errMsg: "",
                data: {
                    info: "原密码错误haha",
                    status:0
                    

                }
            })
        }
    }
}

// 用户头像
const userPic = async (req, res) => {
    let {Logo,name } = req.body;
    // console.log(Logo,name)
    let data = await userModel.UpdatePic(name, Logo);
    if (data.ok=1) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "修改头像成功",
                status:1
            }
        })
    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                info: "修改失败",
                status:0
            }
        })
    }
}
// 用户信息管理
const userInter = async (req, res) => {
    let {id } = req.body;
    console.log(id)
    let data = await userModel.userInter(id);
    if (data) {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                list:data,
                status:1
            }
        })
    } else {
        res.json({
            code: 200,
            errMsg: "",
            data: {
                list:[],
                status:0
            }
        })
    }
}

module.exports = {
    userRegister,
    userLogin,
    updatePassword,
    userPic,
    userInter
}
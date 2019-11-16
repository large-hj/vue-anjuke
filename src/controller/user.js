const userModel = require("../model/user");
const userRegister = async (req, res) => {
    let { username, password } = req.body;
    console.log(username)
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
        // 用户注册时间
        let registerTime = new Date().getTime();
        // 用户的随机名称
        let name = Math.random().toString(36).substr(2, 8);
        let saveData = await userModel.userSave({ username, password, registerTime, name});
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

module.exports = {
    userRegister
}
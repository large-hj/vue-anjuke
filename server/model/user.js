// model模块 MVC中的M数据的增删改查
const mongoose=require("../utils/database");
// 设置数据库字段
const User=mongoose.model("stu",{
    username:String,
    password:String,
    status:Boolean,
    registerTime:Number,
    name:String,
    urlPic:String
})
// 查找单个用户的信息
const userFind=(userInfo)=>{
    return User.findOne(userInfo);
}
// 保存用户信息
const userSave=(userInfo,cb)=>{
    let user=new User(userInfo);
    return user.save()
}
// 查询原密码
const userOldPassword=(name)=>{
    return User.findOne({name:name});
}
// 修改密码update({_id:id},{$set:booksInfo});
// db.表名.update({key:val},{$set:{key:val}})  修改数据
//导出模块
const UpdatePassword=(name,newPassword)=>{
    return User.update({name:name},{$set:{password:newPassword}});
}
const UpdatePic=(name,urlPic)=>{
    return User.update({name:name},{$set:{urlPic:urlPic}});
}
// 查询单个用户信息接口
const userInter=(id)=>{
    return User.findOne({_id:id});
}


module.exports={
    userFind,
    userSave,
    userOldPassword,
    UpdatePassword,
    UpdatePic,
    userInter
}
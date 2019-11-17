const mongoose=require("../utils/database");

const User=mongoose.model("hello",{
    username:String,
    password:String,
    registerTime:Number,
    name:String,
})
// 查找单个用户的信息
const userFind=(userInfo)=>{
    return User.findOne(userInfo);
}
const userSave=(userInfo,cb)=>{
    let user=new User(userInfo);
    return user.save()
}


module.exports={
    userFind,
    userSave,
}
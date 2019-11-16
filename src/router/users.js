var express = require('express');
// 调用express中的router函数
var router = express.Router();

const userController=require("../controller/user")
router.post("/register",userController.userRegister);



module.exports = router;

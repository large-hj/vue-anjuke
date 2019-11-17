<template>
  <div class="box">
    <div id="login_content">
      <div class="login_username">
        <input type="text" placeholder="账户名/手机号/Email" v-model="val1" />
      </div>
      <div class="login_password">
        <input type="password" placeholder="请输入您的密码" v-model="val2"/>
      </div>
      <div class="login_btn">
        <input type="submit" @click="login()" value="登录" />
      </div>
    </div> 
  </div>
</template>


<script>


export default {
   name:"login" ,
  data(){
    return{
      val1:'',
      val2:'',

    }
  },
   methods:{
     login(){
      //  console.log(this.Cookies.get("token"))
       
       alert(1)
           var _this = this;
                this.disablebtn = true;
                this.loginText = "登录中...";
                //this.$reqs就访问到了main.js中绑定的axios
                this.$reqs.post("/users.js/login",{
                        username:this.val1,
                        password:this.val2
                }).then(function(data){ 
                    //成功
                    console.log(data.data.data.data)
                    _this.disablebtn = false;
                    _this.loginText = "登录";
                    if(data.data.code==200){
                          sessionStorage.setItem("name",data.data.data.data.name);
                          sessionStorage.setItem("urlPic",data.data.data.data.urlPic)
                          sessionStorage.setItem("id",data.data.data.data._id);
                      window.location.href="http://localhost:8080";
                    }
                    
                }).catch(function (data) {
                    //失败
                      // alert(data.data.data.info)
                    _this.disablebtn = false;
                    _this.loginText = "登录"
                });
     }
   }
};
</script>



<style scoped>

#login_content .login_username {
    width: 100%;
    height: .5rem;
    padding: 0 0.1rem;
    margin-top: 0.2rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    border-radius: 0.1rem;
}
#login_content .login_password{
    width: 100%;
    height: .5rem;
    margin-top: 0.2rem;
    padding: 0 0.1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
}
#login_content input{
  width:100%;
  background: #ccc;
  border-radius: 0.05rem;
  font-size:.16rem;
  padding-left: .2rem;
  cursor: pointer;
}
#login_content .login_btn{
    width: 100%;
    height: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: .2rem;
}
#login_content .login_btn>input{
    width: 96%;
    height:0.4rem;
    background: #3CB950;
    border-radius: 3px;
    border: none;
    display: block;
    color: white;
    font-size: .16rem;
}

.login_link{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .1rem .2rem;
    font-size: .16rem;
}
</style>


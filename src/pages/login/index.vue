<template>
  <div class="box">
    <div class="header">
      <div class="logo">
        <img
          src="https://pages.anjukestatic.com/usersite/touch/img/user/login/icon_logo@3x.png"
          alt
        />
      </div>
    </div>

    <div id="login_content">
      <div class="login_username">
        <input type="text" placeholder="账户名/手机号/Email" />
      </div>
      <div class="login_password">
        <input type="password" placeholder="请输入您的密码" />
      </div>
      <div class="login_btn">
        <input type="submit" value="登录" />
      </div>
      <div class="login_link">
        <p>立即注册</p>
        <p>找回密码</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>



<style scoped>
.header {
  width: 100%;
  height: 0.8rem;
  overflow: hidden;
  margin-bottom: 0.2rem;
}
.header .logo {
  width: 1.27rem;
  height: 0.4rem;
  margin: 0 auto;
  margin-top: 0.4rem;
}
.header .logo img {
  width: 100%;
  height: 100%;
}

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

#login_content .login_link{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .1rem .2rem;
    font-size: .16rem;
}
</style>>


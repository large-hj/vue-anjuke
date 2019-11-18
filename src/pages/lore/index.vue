<template>
  <div class="box">
    <div class="header">
      <router-link tag="div" to="/movie" class="logo">
        <img
          src="https://pages.anjukestatic.com/usersite/touch/img/user/login/icon_logo@3x.png"
          alt
        />
      </router-link>
    </div>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      
      <div class="login_link">
        <router-link tag="p" to="/lore/login">立即登陆</router-link>
        <router-link tag="p" to="/lore/register">立即注册</router-link>
      </div>
      
       
  </div>
</template>


<script>
export default {
  
};
</script>



<style lang="scss" scoped>
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

.login_link{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: .1rem .2rem;
    font-size: .16rem;

}
</style>>


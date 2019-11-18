<template>
    <div class="box">
        <div class="top">
            <div class="info">
                <div class="userPic" @click="handle()">
                    <img :src="urlPic">
                </div>
                <router-link tag="div" to="/lore" class="lore"  >{{name}}<span v-if="flag">登录/注册</span></router-link>
            </div>
        </div>
        <div class="contain">
            <span class="iconfont">&#xe602;     我的点评</span>
            <span class="iconfont">&#xe610;     我的房源</span>
            <span class="iconfont">&#xe61b;     我的卡卷</span>
            <span class="iconfont">&#xe696;      我的订单</span>
            <span class="iconfont" @click="handleExit()">&#xe696;      退出登录</span>
            <span class="iconfont">&#xe696;      修改密码</span>
        </div>
    </div>
</template>
<script>
import Vue from 'vue';
import { Popup} from 'vant';
import { Cell } from 'vant';

Vue.use(Popup);
Vue.use(Cell);
export default{
name: "user",
data(){
    return{
            urlPic:"",
            name:"",
            _id:"",
            flag:false,
             show: false,
    }
},
  created() {
       this.urlPic=Cookies.get("urlPic");
       this.name=Cookies.get("name");
       this._id=Cookies.get("id")
       if(this._id==null){
           this.flag=true;
       }
    
       
       
  },
  
   methods: {
    handle(){
       if(this._id==null){ 
       }
    },
    handleExit(){
        alert("hello")
        Cookies.remove("token");
        Cookies.remove("name");
        Cookies.remove("id");
        Cookies.remove("urlPic");
        window.location.href="http://localhost:8080/#/lore"
     
        
    }
  }
  
};

</script>
<style scoped>
    .box .top{
        width: 100%;
        height:1.25rem;
        background: #62ab00; 
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .box .top .info{
        width: 1rem;
        height:1rem;
      
    }
    .userPic{
        width:100%;
        height:80%;
        background:url("http://pages.anjukestatic.com/usersite/touch/img/user/photo_default.png") no-repeat center center;
        border-radius: 50% 50%;
        overflow: hidden;
    }
    .userPic img{
        width: 100%;
        height: 100%;
    }
    .lore{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.14rem;
        color: #fff;
        border:1px solid #fff;
        margin-top: 0.1rem;
    }
    .contain{
        background: #ccc;
        height: 5rem
    }
    .contain span{
        padding-left: 0.1rem;
        margin-top: 0.1rem;
        display: block;
        background: #fff;
        margin-bottom: 0.1rem;
        width: 100%;
        height: 0.4rem;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        font-size: 0.14rem;
    }
</style>
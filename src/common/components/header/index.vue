<template>
  <div>
    <div class="header">
      <div class="BizHeader_logo">
        <a  class="title">安居客</a>
        <router-link
          tag="a"
          :to="{name:'city',params:{path:$route.path}}"
          class="city_name iconfont"
        >{{addr}}&#xe6aa;</router-link>
       
        <i class="iconfont icon-xialajiantou"></i>
      </div>
      <div class="BizHeader-detail">
        <span>新房</span>
        <span>二手房</span>
        <span>租房</span>
        <span  @click="showPopup" class="iconfont">&#xe712;</span>
      </div>
    </div>
   
      
 
    
        <van-popup class="popup" 
        v-model="show"  
        closeable
        round
        close-icon-position="top-left"
        position="top" 
        :style="{height: '64%' }"
        >
            <div class="header">
                <div class="BizHeader_logo">
                <a href="https://m.anjuke.com/bj/" class="title">安居客</a>
                <router-link
                    tag="a"
                    :to="{name:'city',params:{path:$route.path}}"
                    class="city_name iconfont"
                >{{addr}}&#xe6aa;</router-link>
                
                <i class="iconfont icon-xialajiantou"></i>
                </div>
                <div class="BizHeader-detail">
                <span>新房</span>
                <span>二手房</span>
                <span>租房</span>
                <span  @click="showPopup" class="iconfont">&#xe712;</span>
                </div>
            </div>
            <div class="box">
                <div class="iconfont">&#xe619;  <a href="http://localhost:8080/#/zx">商铺写字楼</a> </div>
                <div class="iconfont">&#xe655;  <a href="http://localhost:8080/#/zx">海外地产</a> </div>
                <div class="iconfont">&#xe621;  <a href="http://localhost:8080/#/zx">装修</a> </div>
                <div class="iconfont">&#xe620;  <a href="http://localhost:8080/#/zx">查房价</a></div>
                <div class="iconfont">&#xe703;  <a href="http://localhost:8080/#/zx">问答</a> </div>
                <router-link tag="div" to="/login" class="iconfont">&#xe66e;  <a> 登录注册</a></router-link>
             
            </div>
            
               <router-view></router-view>     


        </van-popup>
 
   
  </div>
</template>

<script>
import Vue from 'vue';
import { Popup} from 'vant';
import { Cell } from 'vant';

Vue.use(Popup);
Vue.use(Cell);
export default {
  name: "Header",
  data() {
    return {
      addr: "北京",
      show: false
    };
  },
  methods: {
     showPopup() {
      this.show = true;
    }
  }
};
</script>

<style scoped>
.box div{
    padding-left: 0.2rem;
    width: 100%;
    height: 0.5rem;
    border-bottom: 1px solid #ccc;
    font-size: 0.16rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.box div a{
     padding-left: 0.2rem;
}
.header {
  width: 100%;
  height: 0.54rem;
  background: #fff;
  padding: 0 0.15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.header .BizHeader_logo {
  width: 1.44rem;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .BizHeader_logo .title {
  color: #1aad00;
  display: inline-block;
  height: 0.24rem;
  line-height: 0.24rem;
  font-size: 0.24rem;
}
.header .BizHeader_logo .city_name {
  color: #666;
  font-size: 0.12rem;
  margin-top: 0.09rem;
  margin-left: 0.04rem;
}
.header .BizHeader_logo i {
  color: #666;
  font-size: 0.1rem;
  margin-top: 0.1rem;
}
.header .BizHeader-detail {
  width: 1.57rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .BizHeader-detail span {
  font-size: 0.12rem;
  color: #666;
}
</style>
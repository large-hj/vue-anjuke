<template>
  <div class="box_broker">
    <header class="header">
      <v-touch tag="span" @tap="handleBack()">
<<<<<<< HEAD
        <i class="iconfont icon1">&#xe600;</i>返回
=======
        <i class="iconfont">&#xe600;</i>返回
>>>>>>> a0031d9bb365224fac4fa08b2dacd44e1ff76760
      </v-touch>
      <span>
        经纪人
        <i class="iconfont icon2">&#xe658;</i>
      </span>
      <span>
<<<<<<< HEAD
        <i class="iconfont icon3">&#xe613;</i>
=======
        <i class="iconfont">&#xe613;</i>
>>>>>>> a0031d9bb365224fac4fa08b2dacd44e1ff76760
      </span>
    </header>
    <!-- 导航 -->
    <!-- <div class="nav">
      <div class="nav1">区域<i class="iconfont">&#xe6aa;</i></div>
      <div class="nav2">服务<i class="iconfont">&#xe6aa;</i></div>
    </div>-->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="hide1"></div>
    <!-- 内容 -->
    <div class="content" v-for="(item,index) in list" :key="index">
      <div class="content1">
        <img :src="item.user_photo" />
      </div>
      <div class="content2">
        <div class="info">
          <span class="name">{{item.broker_name}}</span>
          <a href class="phone">电话咨询</a>
        </div>
        <div class="star">
<<<<<<< HEAD
          <i class="iconfont icon">&#xe676;</i>
          <i class="iconfont icon">&#xe676;</i>
          <i class="iconfont icon">&#xe676;</i>
          <i class="iconfont icon">&#xe676;</i>
          <i class="iconfont icon">&#xe676;</i>
=======
          <i class="iconfont">&#xe676;</i>
          <i class="iconfont">&#xe676;</i>
          <i class="iconfont">&#xe676;</i>
          <i class="iconfont">&#xe676;</i>
          <i class="iconfont">&#xe676;</i>
>>>>>>> a0031d9bb365224fac4fa08b2dacd44e1ff76760
        </div>
        <div class="service">
          <div>北京市易合房地产经纪有限责任公司</div>
          <div>{{item.store_name}}</div>
        </div>
        <div class="select">
          <span>置换服务</span>
          <span>法律咨询</span>
          <span>全城看房</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);
import { brokerApi } from "@api/neighborhood";
export default {
  data() {
    return {
      list: [],
        value1: 0,
      value2: 'a',
      option1: [
        { text: '区域', value: 0 },
        { text: '不限', value: 1 },
        { text: '朝阳', value: 2 },
        { text: '海淀', value: 3 },
      ],
      option2: [
        { text: '服务', value: 'a' },
        { text: '不限', value: 'b' },
        { text: '置换服务', value: 'c' },
        { text: '法律咨询', value: 'd' },
      ]
    };
  },
  created() {
    this.handlebroker(2);
  },
  methods: {
    async handlebroker(p) {
      // 获取数据
      let data = await brokerApi(p);
      console.log(data);
      //页面渲染
      this.list = data.data;
      console.log(data.data);
    },
    handleBack() {
      this.$router.back();
    }
  }
};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.46rem;
  background: #62ab00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.12rem;
}
.header span {
  font-size: 0.16rem;
  color: #fff;
}
<<<<<<< HEAD
.icon2,.icon1,.icon3 {
  font-weight: 300;
  font-size: 0.16rem;
=======
.icon2 {
  font-weight: 300;
>>>>>>> a0031d9bb365224fac4fa08b2dacd44e1ff76760
}
/*************导航**************/
.nav {
  height: 0.46rem;
  display: flex;
}
.nav .nav1,
.nav2 {
  width: 100%;
  padding: 0 0.15rem;
  text-align: center;
  line-height: 0.46rem;
  font-size: 0.14rem;
  color: #333333;
}
/* list */
.content {
  height: 1.3rem;
  padding: 0.13rem;
  display: flex;
  border-top: 1px solid #ccc;
}
.content1 {
  width: 0.75rem;
  height: 0.8rem;
  border-radius: 0.8rem;
  overflow: hidden;
}
.content1 > img {
  width: 0.75rem;
  height: 0.8rem;
}
.content2 {
  width: 2.2rem;
  flex-direction: column;
  margin-left: 0.06rem;
  display: flex;
  .info {
    height: 0.225rem;
    display: flex;
    justify-content: space-between;
    .name {
      display: inline-block;
      vertical-align: middle;
      font-size: 0.17rem;
      color: #333;
    }
    .phone {
      display: inline-block;
      width: 0.76rem;
      height: 0.24rem;
      line-height: 0.24rem;
<<<<<<< HEAD
=======
      line-height: 24px;
>>>>>>> a0031d9bb365224fac4fa08b2dacd44e1ff76760
      color: #62ab00;
      border: 1px solid #62ab00;
      border-radius: 0.04rem;
      text-align: center;
      margin-right: 0.16rem;
      font-size: 0.12rem;
    }
  }
}
.star {
  height: 0.28rem;
  color: #62ab00;
  display: flex;
  font-size: 0.14rem;
  align-items: center;
<<<<<<< HEAD
  .icon{
    font-size: 0.16rem;
  }
=======
>>>>>>> a0031d9bb365224fac4fa08b2dacd44e1ff76760
}
.service {
  height: 0.26rem;
  display: flex;
}
.service div {
  color: #999;
  font-size: 0.14rem;
  width: 0.98rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.select {
  display: flex;
  height: 0.19rem;
  justify-content: space-between;
}
.select span {
  display: inline-block;
  width: 0.58rem;
  border: 1px solid #e6e6e6;
  border-radius: 0.02rem;
  padding: 0 0.04rem;
  color: #999;
  font-size: 0.12rem;
}
</style>
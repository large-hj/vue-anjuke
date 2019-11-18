<template>
  <div class="free_look_house">
    <div class="top">
      <div class="header">
        <v-touch class="header-1" tag="div" @tap="handlebacksy()">安居客</v-touch>
        <div class="header-2">
          <div class="address">
            <span class="site">无锡</span>
            <i class="iconfont">&#xe6aa;</i>
          </div>

          <router-link tag="div" to="/search" class="search">
            <i class="iconfont icon2">&#xe613;</i>
            <span>搜索小区</span>
          </router-link>
        </div>
        <div class="header-3">
          <i class="iconfont icon3">&#xe669;</i>
          <span class="direct">导航</span>
        </div>
      </div>
      <!-- 导航 -->
      
        <ul class="nav1">
          <li>
            <router-link tag="a" to="/q_answers">百度问答</router-link>
          </li>
          <li>
            <a>小区</a>
          </li>
          <li>
            <a>房价</a>
          </li>
          <li>
            <router-link tag="a" to="/broker">经济人</router-link>
          </li>
          <li>
            <a>估价</a>
          </li>
          <li>
            <a>更多</a>
          </li>
        </ul>
     
    </div>
    <van-sticky>
    <div>
      <van-dropdown-menu class="ui">
        <van-dropdown-item v-model="value1" :options="option1"></van-dropdown-item>
        <van-dropdown-item v-model="value2" :options="option2"></van-dropdown-item>
        <van-dropdown-item v-model="value3" :options="option3"></van-dropdown-item>
        <div @click="handlesort()">
          <van-dropdown-item v-model="value4" :options="option4"></van-dropdown-item>
        </div>
      </van-dropdown-menu>
    </div>
     </van-sticky>
    <!-- list页 -->
    <Alley-scroll ref="scroll">
      <div class="house_body">
        <div class="house_content">
          <router-link
            class="list"
            v-for="(item,index) in lists "
            :key="index"
            tag="div"
            :to="'/hwdetail/'+item.loupan_id"
          >
            <div class="img">
              <img :src="item.image" />
            </div>
            <div class="content">
              <span class="strong">{{item.loupan_name_cn}}</span>
              <span>
                {{item.country_name}}
                <i>| {{item.city_name}}</i>
              </span>
              <span class="ys">
                <i v-for="(child,index) in item.property" :key="index">{{child}}</i>
              </span>
              <div class="last">
                <span class="yue">
                  约￥
                  <i class="money">{{item.loupan_price}}</i>万元
                  <i></i> |
                  <i>{{item.fangyuan_area}}m</i>
                </span>
                <i class="adv">{{item.rec_reason}}</i>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </Alley-scroll>
  </div>
</template>
<script>
import Vue from "vue";
import { DropdownMenu, DropdownItem } from "vant";
Vue.use(DropdownMenu).use(DropdownItem);
import { neighborhoodApi } from "@api/neighborhood";
export default {
  // name:"Neighborhood",

  data() {
    return {
      lists: [],
      value1: 0,
      value2: "a",
      value3: "a",
      value4: "a",
      option1: [
        { text: "区域", value: 0 },
        { text: "朝阳", value: 1 },
        { text: "海淀", value: 2 },
        { text: "海淀", value: 3 }
      ],
      option2: [
        { text: "价格", value: "a" },
        { text: "8000元以下", value: "b" },
        { text: "8000-1万", value: "c" },
        { text: "1-1.5万", value: "d" }
      ],
      option3: [
        { text: "特色", value: "a" },
        { text: "绿化优美", value: "b" },
        { text: "别墅", value: "c" },
        { text: "次新房", value: "d" }
      ],
      option4: [
        { text: "排序", value: "a" },
        { text: "价格升序", value: "asc" },
        { text: "价格降序", value: "desc" }
      ]
    };
  },
  /********************************下拉刷新 */
  watch: {
    lists() {
      // console.log("更新了");
      this.$refs.scroll.handlefinishPullDown();
    }
  },
  /*******************/
  created() {
    this.handleGetNewHouseList(2);
  },
  methods: {
    async handleGetNewHouseList(page) {
      // 获取数据
      let data = await neighborhoodApi(page);
      //页面渲染
      this.lists = data.data.rows;
      console.log(data.data.rows);
    },
    handlebacksy() {
      this.$router.back();
    },
    /**********************排序 */

    handlesort() {
      let value = this.option4[0].value;
    }
  },
  /**********下拉刷新***************/
  mounted() {
    this.$refs.scroll.handlepullingDown(() => {
      var arr = [2, 3, 4, 5, 6, 8];
      var index = parseInt(0 + Math.random() * 6);
      this.handleGetNewHouseList(arr[index]);
    });

    this.$refs.scroll.handleScroll();
  }
  /******************************/
};
</script>
<style scoped>
body,
html {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.top,
.nav1 {
  z-index: 10;
}
.ui {
  z-index: 111;
}
/* 头部 */
.top {
  flex-direction: column;
  display: flex;
}
.header {
  width: 100%;
  height: 0.46rem;
  background: #62ab00;
  padding: 0 0.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.header-1 {
  width: 0.71rem;
  height: 100%;
  background: #62ab00;
  line-height: 0.46rem;
  font-size: 0.2rem;
  font-weight: 900;
  color: #ffffff;
}

.header-2 {
  width: 2.2rem;
  height: 0.3rem;
  background: #ffffff;
  display: flex;
  padding: 0.06rem 0;
  font-size: 0.14rem;
  color: #999999;
  border-radius: 0.05rem;
}
.header-2 .address {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.12rem;
  border-right: 1px solid #ccc;
}
.site {
  font-size: 0.14rem;
}
.header-2 .search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header-2 .search .icon2 {
  padding: 0 0.1rem;
}
.header-3 {
  width: 0.4rem;
  height: 0.3rem;
  flex-direction: column;
  display: flex;
  color: #e6e6e6;
  justify-content: center;
  align-items: center;
}
.icon3 {
  font-size: 0.14rem;
}
.direct {
  font-size: 0.1rem;
}
.nav1 {
  background: #62ab00;
  height: 0.36rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav1 li {
  padding: 0 0.06rem;
  display: flex;
}
.nav1 li a {
  font-size: 0.15rem;
  color: #e6e6e6;
}
/**********************ui********************/

/* list */
.free_look_house {
  height: 11.46rem;
  overflow-y: auto;
}
.house_body {
  overflow-x: hidden;
  background: #fff;
}
/* .house_content{
  width: 100%;
} */
.list {
  width: 100%;
  height: 1.33rem;
  padding: 0.15rem;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: flex-start;
  align-items: center;
}
.list .img {
  display: inline-block;
  width: 40%;
  height: 0.81rem;
}
.list .img img {
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding-left: 0.1rem;
}
.content .strong {
  font-size: 0.14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content p {
  font-size: 0.12rem;
}
.content span {
  font-size: 0.1rem;
}
.content .last {
  display: flex;
  flex-direction: column;
  margin-top: 0.03rem;
}
.content .last span {
  padding-right: 0.05rem;
  color: cyan;
}
.content .last span i {
  color: black;
  font-size: 0.12rem;
}
.content .last a {
  color: black;
  padding-left: 0.1rem;
  font-size: 0.12rem;
}
.content .ys {
  display: inline-block;
  height: 0.17rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content .ys i {
  margin-top: 0.051rem;
  display: inline-block;
  background: #f3f8fa;
  color: #7dafe8;
  margin-left: 0.02rem;
}
.content .last .yue {
  color: #e54b00;
}
.content .last .money {
  color: red;
}
.content .last .adv {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  margin-top: 0.04rem;
}
</style>>

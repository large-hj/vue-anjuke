<template>
  <div class="bigbox">
    <!-- 头部 -->
    <div class="head">
     <v-touch 
     tag="div"
     @tap="backtohome()"
     class="icon1"> <i class="iconfont icon1">&#xe600;</i></v-touch>
      <span class="free">免费看房</span>
      <i class="iconfont">&#xe6d5;</i>
    </div>
    <!-- 大图 -->
    <div class="pic">
      <img src="http://pages.anjukestatic.com/kfstouch/img/kft/kft_head_bg.png" />
      <div class="house">
        <p class="pic-title">免费看房</p>
        <i></i>
        <p class="take-look">全程免费，专业带看</p>
      </div>
      <div class="fixed">
        <ul class="ul-house">
          <li class="li1">
           专车看房
          </li>
          <li class="li2">
           大巴看房
          </li>
        </ul>
      </div>
    </div>
    <!-- 详情 -->
    <div class="main">
      <a class="box">
        <div class="photo">
          <img
            src="https://pic4.ajkimg.com/display/xinfang/ee49da7c8e4354de94c2d5384ee5bb64/600x450n.jpg"
          />
        </div>
        <div class="detail">
          <p class="site">浦东-绿宝·锦庭</p>
          <p class="group">
            <em class="wait">待售</em>
            <em class="wait1">住宅</em>
            <em class="wait1">低容积</em>
            <em class="wait1">品牌开发商</em>
            <em class="wait1">南北通透</em>
          </p>
          <p class="group-last">
            <span>随时随地接送看房</span>
            <em>25人已报名</em>
          </p>
        </div>
        <div class="look-detail">
          <span class="one">查看详情</span>
          <span class="two">参与报名</span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
    methods:{
        backtohome(){
            this.$router.back();
        }
    }
};
</script>
<style scoped>
body,
html {
    width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  position: relative;
}
/* 头部 */
.head {
  height: 0.45rem;
  background: #62ab00;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.free {
  width: 2.8rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.16rem;
}
.icon1 {
  font-size: 0.16rem;
}
.icon2 {
  font-size: 0.14rem;
}
/* 大图 */
.pic {
  width: 100%;
  height: 1.42rem;
  position: absolute;
  top: 0.45rem;
  left: 0;
}
.pic img {
  width: 100%;
  height: 1.42rem;
}
.house {
  width: 100%;
  height: 0.766rem;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  width: 100%;
}
.pic-title {
  font-size: 0.3rem;
  margin-top: 0.19rem;
  margin-bottom: 0.06rem;
  line-height: 0.3rem;
  font-weight: bold;
  color: #fff;
}
.take-look {
  height: 0.12rem;
  color: #fff;
  text-shadow: 0 0 16px rgba(62, 83, 101, 0.4);
  -webkit-text-shadow: 0 0 16px rgba(62, 83, 101, 0.4);
  font-size: 0.12rem;
  margin-top: 0.08rem;
  line-height: 0.12rem;
}
.fixed {
  width: 100%;
  position: absolute;
  margin: 0 0.1rem;
  background: #fff;
  height: 0.44rem;
  border-bottom: solid 0.1rem #f5f5f5;
  background: skyblue;
  left: 0;
  bottom: 0;
}
.ul-house {
  width: 100%;
  height: 0.44rem;
  background: #fff;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.ul-house .li1,.li2 {
  width: 50%;
  text-align: center;
  height: 0.44rem;
    font-size: 0.16rem;
  color: #43474d;
  line-height: 0.44rem;
}
/* 详情 */
.main {
  width: 100%;
  height: 100%;
  padding: 0 0.1rem 0.26rem;
  position: absolute;
  top: 1.87rem;
  left: 0;
}
.box {
  height: 3.3rem;
  display: block;
  padding: 15px 15px 0;
}
.photo {
  width: 100%;
  height: 1.7rem;
}
.photo img {
  width: 100%;
  height: 1.7rem;
}
.detail {
  width: 100%;
  height: 0.88rem;
  border-bottom: 1px solid #ccc;
  flex-direction: column;
  display: flex;
}
.site {
  height: 0.18rem;
  font-size: 0.16rem;
  line-height: 0.18rem;
  margin-bottom: 0.09rem;
  columns: #43474d;
}
.group {
  width: 100%;
  height: 0.18rem;
  margin-bottom: 0.1rem;
  display: flex;
}
.group em {
  font-style: normal;
  display: inline-block;
}
.group .wait {
  text-align: center;
  line-height: 0.18rem;
  width: 0.36rem;
  height: 100%;
  background: #fff5f1;
  color: #f69470;
  font-size: 0.12rem;
}
.group em:nth-of-type(2) {
  text-align: center;
  height: 0.18rem;
  line-height: 0.18rem;
  padding: 0 0.06rem;
  border-radius: 0;
  background: #f3f8fa;
  color: #7caee8;
  font-size: 0.12rem;
}
.group em:nth-of-type(3),
em:nth-of-type(4),
em:nth-of-type(5) {
  text-align: center;
  height: 0.18rem;
  line-height: 0.18rem;
  padding: 0 0.06rem;
  border-radius: 0;
  font-size: 0.12rem;
  background: #f9f9f9;
  color: #a3a8ad;
}
.group-last{
    height: 0.14rem;
    display: flex;
}
.group-last span {
  font-size: 0.12rem;
  color: #9aa0a6;
}
.group-last em {
  margin-left: 0.2rem;
  font-size: 0.12rem;
  color: #9aa0a6;
  font-style: normal;
}
.look-detail {
  width: 100%;
  height: 0.54rem;
  display: flex;
  padding: 0.12rem 0;
  justify-content: space-between;
}
.look-detail span {
  width: 49%;
  height: 0.3rem;
  font-size: 0.12rem;
  color: #9aa0a6;
  text-align: center;
  line-height: 0.3rem;
  display: flex;
}
.look-detail span:nth-of-type(1) {
  border: 1px solid #9aa0a6;
}
.look-detail span:nth-of-type(2) {
  color: #62ab00;
  border: 1px solid #62ab00;
}
</style>
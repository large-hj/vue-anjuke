<template>
  <div class="box">
    <header>
      <span>安居客</span>
      <span>楼盘详情</span>
      <span>同区域楼盘</span>
    </header>
    <div class="img">
      <img
        :src="detail.default_pic"
      />
    </div>
    <!-- 详情信息 -->
    <div class="detial">
      <div>
        <p class="p1">{{detail.loupan_name}}</p>
        <p class="p">
          <a>新房</a>
          <a>别墅</a>
          <a>投资回报率5%</a>
          <a>年租金12万</a>
        </p>
      </div>

      <div class="info">
        <p>
          <span>总价</span>
          <span>¥249万/套起</span>
        </p>
        <p>
          <span>地址</span>
          <span><i>{{detail.country_name}}-{{detail.city_name}}</i>{{detail.loupan_address}}</span>
        </p>

        <div class="inquire">
          <div>
            <i></i>
            <span>询最低价</span>
          </div>
          <div>
            <i></i>
            <span>贷款咨询</span>
          </div>
        </div>
      </div>
    </div>
    <!-- 楼盘户型 -->
    <div class="tower">
      <div class="box1">
        <p class="floor">楼盘户型(1)</p>
      </div>
    </div>
    <!-- 底部 -->
    <div class="footer">
      <div class="developers">
        <p class="developers1">美亚置业</p>
        <span class="developers2">开发商</span>
      </div>
      <div class="communicate">
        <i></i>
        <span>在线沟通</span>
      </div>
      <div class="phone">
        <i></i>
        <span>电话</span>
      </div>
    </div>
  </div>
</template>
<script>
import { hwdetailApi } from "@api/neighborhood";
export default {
  nane:"Hwdetail",
  props:["id"],
  data(){
    return{
      detail:{}
    }
  },
  
  created() {
   
    this.handlehwdetail(this.id);
  },
  methods: {
    async handlehwdetail(loupan_id) {
      let data = await hwdetailApi(loupan_id);
      console.log(data);
      this.detail=data.data.base;
    }
  }
};
</script>
<style scoped  lang="scss">
.box {
  flex-direction: column;
  display: flex;
  overflow-y: auto;
}
header {
  width: 100%;
  height: 0.4rem;
  background: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header span {
  font-size: 0.14rem;
  color: #fff;
}
.img {
  width: 100%;
  height: 2.2rem;
}
.img img {
  width: 100%;
  height: 100%;
}
.detial {
  width: 94%;
  height: 2rem;
  background: #ffffff;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0.1rem;
  margin-top: -0.15rem;
  box-shadow: 0 4px 8px hsla(0, 0%, 80%, 0.25);
}
.detial > div {
  width: 100%;
  height: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.detial > div .p1 {
  height: 0.48rem;
  font-size: 20px;
  line-height: 24px;
  font-weight: 400;
}

.detial > div span {
  font-size: 0.14rem;
}
.detial > div .p {
  font-size: 0.12rem;
}
.detial > div .p a:nth-of-type(1) {
  display: inline-block;
  color: #79cf86;
  background: #f2fcf3;
}
.detial > div .p a:nth-of-type(2),
a:nth-of-type(3),
a:nth-of-type(4) {
  display: inline-block;
  margin: 0 0 0 3px;
  padding: 3px 5px;
  font-size: 12px;
  line-height: 1;
  color: #bbbaba;
  background: #faf9f9;
  border: none;
}
.info {
  font-size: 0.16rem;
  line-height: 0.3rem;
}
.info p:nth-of-type(1) {
  display: flex;
}
.info p:nth-of-type(2) {
  display: flex;
}
.info p:nth-of-type(1) span:nth-of-type(1) {
  color: #a1a6ac;
  font-size: 0.15rem;
}
.info p:nth-of-type(1) span:nth-of-type(2) {
  display: inline-block;
  color: #ff5339;
  margin-left: 0.12rem;
  font-size: 0.18rem;
}
.info p:nth-of-type(2) span:nth-of-type(1) {
  color: #a1a6ac;
  font-size: 0.15rem;
}
.info p:nth-of-type(2) span:nth-of-type(2) {
  width: 1.47rem;
  display: inline-block;
  color: #8099af;
  margin-left: 0.12rem;
  font-size: 0.18rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.inquire {
  display: flex;
  border-top: 1px solid #ccc;
  margin-top: 0.1rem;
}
.inquire div {
  width: 50%;
  height: 0.4rem;
  text-align: center;
  span {
    color: #8099af;
  }
}
/*********楼盘户型*************/
.tower {
  height: 5rem;
  background: #f2fcf3;
  margin-top: 0.1rem;
  padding: 0 0.15rem;
  .floor {
    font-size: 0.18rem;
    line-height: 1;
    font-weight: 700;
    color: #43474d;
  }
}
/***********底部**********/
.footer {
    width: 100%;
  height: 0.5rem;
  display: flex;
  position: fixed;
  bottom: 0;
  div {
    width: 100%;
  }
}
.developers{
  background: #fff;
  flex-direction: column;
  display: flex;
  padding-left: 0.15rem;
  .developers1{
    font-size: 0.15rem;
    font-weight: 700;
    }
    .developers2{
        font-size: 0.1rem;
        font-weight: 700;
        margin-top:0.05rem;
        color: #ccc;
    }
}

.communicate {
  background-image: linear-gradient(90deg, #ff9800, #ff7500);
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.5rem;
  color: #fff;
}
.phone {
  background-image: linear-gradient(90deg, #3cdc50, #3cb950);
  font-size: 0.16rem;
  text-align: center;
  line-height: 0.5rem;
  color: #fff;
}
</style>
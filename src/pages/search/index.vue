<template>
  <div class="box">
    <div class="searchhead">
        <input type="text" class="search" placeholder="请输入国家或城市" v-model="value">
        <a href="" class="cancle">取消</a>
    </div>
    <div class="list">
      <div class="img">
        <img src="https://pages.anjukestatic.com/usersite/touch/img/haiwai/brand.png" />
      </div>
      <div class="content">
        <span class="strong">顺福轩</span>
        <span>
         的地方似懂非懂从v
          <i>多岁的</i>
        </span>
        <span class="ys">
          <i>好好</i>
        </span>
        <div class="last">
          <span class="yue">
            约￥
            <i class="money">456</i>万元
            <i>订单的</i> |
            <i>120m</i>
          </span>
          <a class="adv">订单</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {searchApi} from  "@api/neighborhood";
export default {
  
  name:"Search",
  data(){
    /*********做双数据绑定********/
    return{
      value:"",
      list:[]
    }
  },
  watch:{
    async value(newVal){
      let data=await searchApi( this.$store)
      console.log(data)
    }
  }
};
</script>
<style scoped lang="scss">
.searchhead {
  position: relative;
  height: 50px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 7px 15px;
  background: #ececec;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  .search{
    display: block;
    height: 0.3rem;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #ebebeb;
    font-size: 0.14rem;
    background: #fff;
    color: #999;
    outline: 0;
    padding: 0 0 0 10px;
  }
  .cancle{
    display: block;
    font-size: 0.14rem;
    width: 0.4rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    padding: 0;
    border: 0;
    color: #62ab00;
    box-sizing: border-box;
    margin-right: 0.05rem;
  }
}
/***************查询出来的列表************** */
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
}
.content .last span {
  padding-right: 0.05rem;
  color: cyan;
}
.content .last span i{
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
}
</style>
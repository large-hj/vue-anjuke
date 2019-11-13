<template>
  <div class="free_look_house">
    <div class="top">
      <div class="header">
        <div class="header-1">安居客</div>
        <div class="header-2">
          <div class="address">
            <span class="site">无锡</span>
            <i class="iconfont">&#xe6aa;</i>
          </div>
          <div class="search">
            <i class="iconfont icon2">&#xe613;</i>
            <span>搜索小区</span>
          </div>
        </div>
        <div class="header-3">
          <i class="iconfont icon3">&#xe669;</i>
          <span class="direct">导航</span>
        </div>
      </div>
      <!-- 导航 -->
      <ul class="nav">
        <li>
          <a href="">二手房</a>
        </li>
        <li>
          <a>小区</a>
        </li>
        <li>
          <a>房价</a>
        </li>
        <li>
          <a>经济人</a>
        </li>
        <li>
          <a>估价</a>
        </li>
        <li>
          <a>更多</a>
        </li>
      </ul>
    </div>
    <!-- list页 -->
     <div class="main">
    <div class="list"  v-for="(item,index) in list" :key="index">
            <div class="img">
                <img :src="item.info.default_image">
               
            </div>
             <div class="content">
                <span class="strong">{{item.info.loupan_name}}</span>
                <span>{{item.info.region_title}} <i>{{item.info.subregion_title}}</i><i>建面</i><i>{{item.info.huxing_area}}</i></span>
                <p>{{item.info.unit_price}}</p>
                <div class="last">
                   <span>{{item.info.display_price_type_str}}</span><span v-for="(child,index) in item.info.loupan_tags" :key="index">{{child}}</span>
                </div>
            </div>
      </div>

      </div>
  </div>
</template>
<script>
import {neighborhoodApi} from "@api/neighborhood";
export default {
  // name:"Neighborhood",
   data(){
     return{
       list:[]
     }
   } ,

  
 created(){
     this.handleGetNewHouseList(14);
  
  },
  methods:{
  async  handleGetNewHouseList(city_id){
      // 获取数据
            let data = await neighborhoodApi(city_id)
        //页面渲染
            this.list=data.data
            console.log(data);
          //  this.newHouseList=data.result.rows;
       }
  }
};
</script>
<style scoped>


body,
html {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
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
.site{
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
.nav{
      background: #62ab00;
      height: 0.36rem;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      
  }
  .nav li{
    padding: 0 0.06rem;
    display: flex;
    
  }
  .nav li a{
      font-size: 0.15rem;
      color:#e6e6e6;
  }
  /* list */
   .main{
        flex-direction: column;
        display: flex;
    }
    .list{
        width: 100%;
        height: 1.13rem;
        padding:  0.15rem;
        display: flex;
        border-bottom:1px solid #ccc;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 0.1rem
       
        }
        .list .img{
            display: inline-block;
            width: 40%;
            height: 0.81rem;
        }
        .list .img img{
            width: 100%;
            height: 100%;
        }
        .content{
            display: flex;
            flex-direction: column;
            width: 80%;
            height: 100%;
            padding-left: 0.1rem;
        }
        .content .strong{
            font-weight: bolder;
            font-size: 0.16rem;

        }
        .content p{
            font-size: 0.13rem;
        }
        .content span{
            font-size: 0.1rem;
        }
        .content .last{
            display: flex;
        }
        .content .last span{
            padding-right: 0.05rem;
        }
</style>>

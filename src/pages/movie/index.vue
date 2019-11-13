<template>
  <div class="page">
    <Header />
    <div class="search-content">
      <!-- <i class="icon icon-search"></i>
      <i class="search-line">|</i>-->
      <i class="search-text">挑好房，上安居客</i>
    </div>

    <div class="nav">
      <div class="con" v-for="(item,index) in list" :key="index">
        <div class="img">
          <img :src="item.img" alt />
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>

    <router-link tag="div" to="/detail" class="list"  v-for="(item,index) in indexList" :key="index">
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
      </router-link>

  </div>
</template>

<script>
import { indexNowApi } from "@api/index";
export default {
  name: "Index",
  data() {
    return {
      list: [
        {
          title: "新房",
          img: ""
        },
        {
          title: "二手房",
          img: ""
        },
        {
          title: "租房",
          img: ""
        },
        {
          title: "商铺写字楼",
          img:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3851715675,1701114100&fm=26&gp=0.jpg"
        },
        {
          title: "海外地产",
          img: ""
        },
        {
          title: "装修",
          img: "https://f12.baidu.com/it/u=2186101177,3850613668&fm=72"
        },
        {
          title: "查房价",
          img: ""
        },
        {
          title: "找小区",
          img:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1815885912,3857949782&fm=26&gp=0.jpg"
        },
        {
          title: "免费看房",
          img:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=106310800,866905876&fm=26&gp=0.jpg"
        },
        {
          title: "地图查房",
          img:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2490533578,3187105333&fm=26&gp=0.jpg"
        }
      ],
       indexList: [],
    };
  },
  watch:{
    indexList(){
      
    }
  },
   created() {
    this.handleGetindexList(10);
  },
   methods: {
    async handleGetindexList(cityId) {
      let data = await indexNowApi(cityId);
      for( var i=0;i<5;i++){
        console.log(data.data.info)
      }
      this.indexList = data.data;//

      
        
    }
  },
  

};
</script>

<style>
/*content*/
.search-content {
  width: 90%;
  height: 0.3rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
  border-radius: 0.01rem;
}

.search-content i {
  font-size: 0.13rem;
  font-style: normal;
}

.nav {
            width: 100%;
            height: 1.83rem;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            overflow: hidden;
            padding-bottom: 0.15rem;
            margin-top: 0.1rem;
            /* background:darkblue ; */
        }
        .nav .con{
            width: 18%;
            height:45%;
            margin-left: 0.05rem;
          
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        .nav .con .img{
            width: 90%;
            height:70%;
          
        }
        .nav .con .img img{
            width: 100%;
            height: 100%;
        }
        .nav .con p{
            font-size: 0.1rem;
        }
         .list{
        width: 100%;
        height: 1.13rem;
        background: paleturquoise;
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
            background: chartreuse;
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
</style>
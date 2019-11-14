<template>
  <div class="box">
    <header>
      <span>安居客</span>
      <span>楼盘详情</span>
      <span>同区域楼盘</span>
    </header>
    <div class="img">
      <img
        :src="detail.info.default_image"
       
      />
    </div>
    <div class="detial">
      <div>
        <p class="p1">{{detail.info.loupan_name}}</p>
        <span>
          别名：
          <span>{{detail.info.loupan_name}}</span>
        </span>
        <p class="p">
          <a v-for="(child,index) in detail.info.loupan_tags" :key="index">{{child}}</a>
          
        </p>
      </div>

      <div class="info">
        <p>
          均价
          <span>{{detail.info.new_price.show_price}}</span>
        </p>
        <p>
          开盘
          <span>{{detail.info.kaipan_date}}</span>
        </p>
        <p>
          户型
          <span>{{detail.info.huxing_area}}室</span>
        </p>
        <p>
          轨交
          <span>14号(东)线枣营－步行680m</span>
        </p>
        <p>
          地址
          <span>{{detail.info.address}}</span>
        </p>
        <button>更多信息</button>
      </div>
    </div>
    <!-- 用户 -->
    <div class="user">
    <div class="user-top">
        <span>用户评价</span>
        <span>查看更多</span>
    </div>
    <div class="youshi-box">
         <span class="youshi" v-for="(item,index) in pingjia.tagsInfo" :key="index">{{item.tag_title}}</span>
       
    </div>
    <div class="people-box"  v-for="(item,index) in pingjia.dianpin" :key="index">
        <div> 
            <img src="https://pic6.ajkimg.com/news/5f2ff2461418209eed7ff4e1485ae2bd?imageMogr2/format/png/thumbnail/140x140" alt="">
            <span>{{item.author_name}}</span>
        </div>
        <p>{{item.content}}.</p>
    </div>
   
</div>
  </div>
</template>
<script>
import { indexNowApi } from "@api/index";
import { loupanApi } from "@api/index";
export default {
    name:"Detail",
    props:["id","index","loupan"],
    data(){
        return {
            detail:{},
            pingjia:{}
        }
    },
    async created(){
      console.log(this.loupan)
        let data = await indexNowApi(this.id);
         this.detail = data.data[this.index];
         
        let dp = await loupanApi(this.loupan);
        this.pingjia=dp
        console.log(this.pingjia)
       
   
    }


};
</script>
<style scoped>
    .box{
        width: 100%;
        height: 20rem;
    }
     header{
            width: 100%;
            height: 0.4rem;
            background: green;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        header span{
            font-size: 0.14rem;
            color: #fff;
        }
        .img{
            width: 100%;
            height: 2.20rem;
        }
        .img img{
            width: 100%;
            height: 100%;
        }
        .detial{
            width: 90%;
            height: 3.0rem;
            background: #ccc;
            margin: 0 auto;
            position: relative;
            display: flex;
            flex-direction: column;
           border-radius: 0.1rem;
            margin-top: -0.15rem;
        }
        .detial>div{
            width: 100%;
            height: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;

        }
        .detial>div .p1{
            font-size:0.16rem;
            font-weight: bolder;
            }
        .detial>div span{
            font-size:  0.14rem       
            }
            .detial>div .p{
            font-size:0.12rem;
           
            }
            .detial>div .p a{
                display: inline-block;
                background: red;
                margin: 0.02rem;
            }
            .info {
                margin-top: 0.4rem;
                font-size: 0.16rem;
                line-height: 0.3rem;
               
            }
            .user{
          
            width: 100%;
            height: 3rem;
        }
        .user .user-top{
            padding: 0 0.15rem;
            height: 0.4rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            
        }
        .user .user-top span:nth-child(1){
            font-size: 0.16rem;
            font-weight: bolder;
            color: black;
        }
        .user .user-top span:nth-child(2){
            font-size: 0.1rem;
            color: #ccc;
        }
        .youshi-box{
            padding: 0 0.1rem;
            height: 0.4rem;
            width: 100%;
           
            display: flex;
            justify-content:flex-start;
            align-items: center;
           
        }
        .youshi{
            display: inline-block;
            font-size: 0.12rem;
            background: #ccc;
            color: black;
             margin-right: 0.1rem;
        }
        .people-box{
            padding: 0 0.1rem;
            height: 0.8rem;
            width: 100%;
            display: flex;
          flex-direction: column;
          justify-content: flex-start;

        }
        .people-box>div{
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        .people-box>div img{
            width: 0.2rem;
            height: 0.2rem;
        }
        .people-box>div span{
            margin-left: 0.2rem;
            font-size: 0.1rem;
            color: #ccc;
        }
        .people-box p{
            font-size: 0.14rem;
            display: flex;
            flex-wrap: wrap;
        }

</style>
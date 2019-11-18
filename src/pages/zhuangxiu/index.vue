<template>
    <div class="page">
        <!-- 头部 -->
         <Header />
         <!-- 导航 -->
        <div class="nav">
      <div class="con" v-for="(item,index) in list" :key="index"
        :to="item.path"
      >
        <div class="img">
          <img :src="item.img" alt />
        </div>
        <p>{{item.title}}</p>
      </div>
    </div>
<!-- 广告 -->
    <div class="banner">
      <img src="https://pic6.ajkimg.com/news/0fc30011e1f3af9e5f16fbc1e6e8ec2a" alt="">
    </div>
<!--  -->
<div class="cons">
        <div class="top">
            <span>推荐</span>
            <span>最in风格</span>
            <span>小户型</span>
            <span>省钱装修</span>
            <span>收纳力max</span>
        </div>
        <div id="box">
            <div class="box" v-for="(item,index) in lists" :key="index">
                <div class="img">
                    <img :src="item.image"
                        alt="">
                </div>
                <div class="ms">
                    <p>{{item.title}}</p>
                    <p class="moudle">{{item.house_style}}<i>{{item.housetype}}</i></p>
                </div>
            </div>
            
            
            <div class="box">
                <div class="img">
                    <img src="https://pic1.ajkimg.com/display/anjuke/8b4b153e87dc2d423e8bbc4eda259a19/400x400c.jpg"
                        alt="">
                </div>
                <div class="ms">
                    <p>其他风格餐厅</p>
                    <p class="moudle">现代<i>2室2厅2卫</i></p>
                </div>
            </div>
        </div>

    </div>


    </div>
</template>
<script>
import {zxApi } from "@api/index";
export default {
  
    name:"zhuangxiu",
    data() {
    return {
      list: [
        {
          title: "美图",
          img: "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_beautypic.png",
          path:"/mt"
        },
        {
          title: "整屋案例",
          img: "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_case.png",
          path:"/zwal"
        },
        {
          title: "公司",
          img: "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_company.png",
          path:"/gs"
        },
        {
          title: "套餐",
          img:"https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_discount.png",
            path:"/tc"
        },
        {
          title: "估价",
          img: "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_price.png",
          path:"/gj"
        },
        {
          title: "加装经验",
          img: "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_experience.png",
          path:"/jzjy"
        },
        {
          title: "新手指南",
          img: "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_newuser.png",
          path:"/xszn"
        },
        {
          title: "商家入驻",
          img:
            "https://pages.anjukestatic.com/usersite/touch/img/decoration/zx_sy_icon_client@3x.png",
            path:"/sjrz"
        },
       
      ],
     
      lists:{}
     
    };
  },
    async created(){
        let zx = await zxApi();
      console.log(zx)
        this.lists=zx.data.list
        console.log(this.lists)
       
   
    }
}
</script>
<style scoped>
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
            width: 20%;
           
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
            font-size: 0.12rem;
        }
        .banner{
            width: 95%;
            height: 1rem;
            margin: 0 auto;
        }
        .banner img{
          width:100%;
          height: 100%;
        }
      .cons {
            width: 100%;
            height: 10rem;
        }

        .cons .top {
            width: 100%;
            height: 0.5rem;
            display: flex;
            justify-content: space-around;
            align-items: center;
            border-bottom: 1px solid #ccc;
        }

        .cons .top span {
            font-size: 0.14rem;
        }



        #box{
            width:100%;
            display: flex;
            justify-content:space-around;
            flex-wrap: wrap;
        }
        .box {
            width:48%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.2rem
        
        }
        
        .box .img{
            width: 95%;
            height:80%;
        }
        .box .img img{
            width: 100%;
            height: 100%;
        }
        .box .ms{
           font-size: 0.12rem;
        }
        .box .ms .moudle{
           font-size: 0.12rem;
           color: #979b9e;
        }
        .box .ms .moudle i{
          margin-left: 0.05rem;
        }
</style>


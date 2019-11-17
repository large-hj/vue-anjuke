<template>
    <div class="box">
         <div class="head">
        <v-touch tag="div" @tap="handleback()" class="icon1"><i class="iconfont">&#xe600;</i></v-touch>
        <div class="search">
            <i class="iconfont">&#xe62e;</i>
            <span>搜索你想知道的问题</span>
        </div>
        <div class="address">
            <span>上海</span>
            <i class="iconfont">&#xe6aa;</i>
        </div>
        <div class="icon2"><i class="iconfont">&#xe696;</i></div>
    </div>
    <!-- 导航 -->
    <div class="nav_broker">
        <div class="content">
            <i class="iconfont">&#xe62a;</i>
            <span>全部</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe6c4;</i>
            <span>交易过户</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe80e;</i>
            <span>租房</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe663;</i>
            <span>卖房</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe69a;</i>
            <span>买房</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe6c4;</i>
            <span>商业地产</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe699;</i>
            <span>贷款</span>
        </div>
        <div class="content">
            <i class="iconfont">&#xe64d;</i>
            <span>其他</span>
        </div>
    </div>
    <!-- 主要内容 -->
    <div class="main">
        <h2>热门问答</h2>
        <div class="lists">
            <router-link tag="span" to="/all" class="all">全部</router-link>
            <router-link tag="span" to="/buy" class="buy">买房</router-link>
            <router-link tag="span" to="/sell" class="sell">卖房</router-link>
            <router-link tag="span" to="/loan" class="loan">贷款</router-link>
        </div>
        <div class="change">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        methods:{
            handleback(){

                this.$router.back();
            }
        }
    }
</script>

<style lang="scss" scoped>
      body,html{
            display: flex;
            flex-direction: column;
            overflow-y: auto;
            position: relative;
            background: #cccccc;
        }
        /* 头部 */
        .head{
            height: 0.45rem;
            background: #62ab00;
            color: #fff;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .icon1{
            display: flex;
            width: 0.45rem;
            height: 100%;
            line-height: 0.45rem;
            text-align: center;
        }
        .search{
            width: 2.22rem;
            height: 100%;
            line-height: 0.45rem;
            background-color: #fff;
            opacity: 0.9;
            height: 0.3rem;
            line-height: 0.3rem;
            border-radius: 0.04rem;
            color: #999;
            font-size: 0.15rem;
            white-space: nowrap;
            padding-left: 0.12rem;
        }
        .address{
           width: 0.6rem;
            height: 100%;
            line-height: 0.45rem;
            display: flex;
        }
        .address span{
            padding-left: 0.07rem;
            font-size: 0.13rem;
        }
        .address i{
            font-size: 0.12rem;
        }
        .icon2{
            width: 0.5rem;
            height: 100%;
            line-height: 0.45rem;
            text-align: center;
            display: flex;
            margin-left: 0.1rem;
        }
        /* 导航 */
        .nav_broker{
            width: 100%;
            height: 0.9rem;
            font-size: 0.15rem;
            color: #555555;
            overflow: hidden;
            overflow-x: scroll;
            white-space: nowrap;
            background: #fff;
            padding: 0.2rem 0;
            display: flex;
            border-bottom:0.1rem solid #ccc;
        }
        .nav_broker>div{
            width: 0.83rem;
            height: 0.5rem;
            text-align: center;
            border-right: 1px solid #f4f4f4;
            flex-direction: column;
            display: flex;
            flex-shrink: 0;
        }
        .nav_broker div:nth-of-type(1) i{
            color: #edbc81;
        }
        .nav_broker div:nth-of-type(2) i{
            color: #5fb7cb;
        }
        .nav_broker div:nth-of-type(3) i{
            color: #68b3ea;
        }
        .nav_broker div:nth-of-type(4) i{
            color: #f57e44;
        }
        .nav_broker div:nth-of-type(5) i{
            color: #4abba7;
        }
        .nav_broker div:nth-of-type(6) i{
            color: #5fb7cb;
        }
        .nav_broker div:nth-of-type(7) i{
            color: #ebc256;
        }
        .nav_broker div:nth-of-type(8) i{
            color: #aaabe4;
        }
        /* 主要内容 */
        .main{
            width: 100%;
            height: 100%;
            overflow-y: auto;
            flex-direction: column;
            display: flex;
            padding: 0.15rem 0 0;

        }
        .lists{
            display: flex;
            justify-content: center;
           border-bottom:1px solid rgb(223, 215, 215);
        }
        .all,.buy,.sell,.loan{
                width: 0.78rem;
                height: 0.38rem;
                padding: 0 0.24rem;
                font-size: 0.15rem;
                line-height: 0.38rem;
            }
</style>
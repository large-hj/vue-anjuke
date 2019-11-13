<template>
    <div class="headDrop">
        <transition name="slide">
            <div class="slide" v-if="flag">
                <ul>
                    <li v-for="(item,index) in lists" :key="index">
                        <i :class="item.icon"></i>
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </div>
                
        </transition>
    </div>
</template>

<script>

export default {
    name:"HeadDrop",
    
    data(){
        return{
            list:[
                {
                    icon:"iconfont icon-zufangfenqi",
                    title:"租房"
                },
                 {
                    icon:"iconfont icon-26",
                    title:"商铺写字楼"
                },
                 {
                    icon:"iconfont icon-haiwai",
                    title:"海外地产"
                },
                 {
                    icon:"iconfont icon-caidanliaozhuangxiu",
                    title:"装修"
                },
                 {
                    icon:"iconfont icon-chafangjia",
                    title:"查房价"
                },
                 {
                    icon:"iconfont icon-wenda",
                    title:"问答"
                },
                 {
                    icon:"iconfont icon-denglu",
                    title:"登录/注册"
                },
            ],
            flag:false
        }
    },
    created() {
        this.$observer.$on("handle",(params)=>{
            console.log(ss);
        })
    },
}
</script>

<style lang="scss" scoped>
    .headDrop{
        width:100%;
       height:3.92rem;
        background: #fff;
        padding:0 .15rem;
    }
    .slide,ul{
         width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        position: absolute;
        left:0;
        top:.54rem;
    }
    .slide li{
        width:100%;
        height:.56rem;
        border:1px solid #f0f0f0;
        display: flex;
        justify-content: left;
        align-items: center;
        p{
            font-size: .12rem;
            color: #43474d;
        }
    }
     .slide-enter{
        top:-70%;
     }
     
</style>
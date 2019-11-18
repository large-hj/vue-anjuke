<template>
    <div class="scroll_container">
        <div class="scroll_loading" v-if="loadingFlag">
            <i class="fa fa-spinner fa-spin"></i>
        </div>
        <div class="wrapper" ref="wrapper">
            <slot></slot>
        </div>
    </div>
   
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"List-scroll",
    data(){
        return{
            loadingFlag:false
        }
    },
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
            //下拉刷新
            pullDownRefresh:true,
            //开启上拉加载更多
            pullUpLoad:{
                 threshold:10,
            },
           
            //scroll事件配置项
            probeType:1,
            click:true,
            tab:true
        })
    },
    methods:{
        handleScroll(){
            this.scroll.on("scroll",this.handleScrollCb)
        },
        handleScrollCb({y}){
            if(y>20){
                this.loadingFlag=true;
            }
        },
        handlepullingDown(callback){
            this.scroll.on("pullingDown",()=>{
                callback();
            })
        },
        handlefinishPullDown(){
            //通知better-scroll进行下一次下拉刷新
            this.scroll.finishPullDown();
            //重新计算better-scroll
            this.scroll.refresh();
            setTimeout(()=>{
                this.loadingFlag=false;
            },100)
        },
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback();
            })
        },
        handlepullingDownFinish(){
            this.$refs.scroll.finishPullDown();
            this.scroll.refresh();
            this.loadingFlag=false;
        },
        finishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        }
    }
}
</script>
<style >
   .wrapper,.scroll_container{
       height:100%;
       overflow:hidden;
   }
   .scroll_loading{
       display: flex;
       justify-content: center;
       align-items: center;
       font-size: .2em;
   }
</style>
<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>
<script>
import BScroll from "better-scroll"
export default {
    name:"List-scroll",
    mounted() {
        this.scroll=new BScroll(this.$refs.wrapper,{
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
        handlepullingUp(callback){
            this.scroll.on("pullingUp",()=>{
                callback();
            })
        },
        finishPullUp(){
            this.scroll.finishPullUp();
            this.scroll.refresh();
        }
    }
}
</script>
<style >
   .wrapper{
       height:100%;
   }
</style>
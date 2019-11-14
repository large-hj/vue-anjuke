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
            //开启下拉加载更多
            pullUpLoad:true,
            //scroll事件配置项
            probeType:1,
            click:true,
            tab:true
        })
    },
}
</script>
<style >
    .wrapper{
        height:100%;
        /* overflow: hidden; */
    }
</style>
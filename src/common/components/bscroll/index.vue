<template>
    <div class="scroll_container">
    <div class="scroll_loading" v-if="loadingFlag">
      <i class="fa fa-spinner fa-pulse"></i>
    </div>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
  </div>
 
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "Alley-scroll",
  data(){
    return{
      loadingFlag:false
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      //开启下拉刷新
      pullDownRefresh: true,
      //开启上拉加载更多
      pullUpLoad: true,
      //scroll事件的配置项
      probeType:1,
      click:true,
      tap:true
    });
  },
  methods:{
    handleScroll(){
        this.scroll.on("scroll",({y})=>{
          if(y>50&&!this.loadingFlag){
            this.loadingFlag=true;
          }
          
          
        })
    },
    handlepullingDown(callback){
      this.scroll.on("pullingDown",()=>{
       callback();
      })
    },
    handlefinishPullDown(){
      this.scroll.finishPullDown();
      this.scroll.refresh();
      this.loadingFlag=false;
    }
  }
};
</script>


<style>
.wrapper,.scroll_container{
  height: 100%;
  /* overflow: hidden; */
}
.scroll_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
}
</style>
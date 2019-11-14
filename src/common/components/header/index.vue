<template>
  <div class="header">
        <div class="BizHeader_logo">
            <a href="https://m.anjuke.com/bj/" class="title">安居客</a>
            <a class="city_name">{{addr}}</a><i class="iconfont icon-xialajiantou"></i>
        </div>
        <div class="BizHeader-detail">
            <span>新房</span>
            <span>二手房</span>
            <span>租房</span>
            <v-touch tag="span" @tap="handleClick()" class="iconfont icon-shouqianniuicon"></v-touch>
        </div>

  </div>
</template>

<script>
export default {
    name: "Header",
  data(){
      return{
          addr:"北京"
      }
  },
  methods: {
      handleClick(){
          this.$emit("handle","true")
      }
  },
};
</script>

<style scoped>
.header {
    width: 100%;
    height: 0.54rem;
    background:#fff;
    padding: 0 0.15rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index:10;
}
.header .BizHeader_logo {
    width:1.44rem;
    height:100%;
    display: flex;
    align-items: center;
    
}
.header .BizHeader_logo .title{
   color: #1aad00;
    display: inline-block;
    height: .24rem;
    line-height:.24rem;
    font-size: .24rem;
}
.header .BizHeader_logo .city_name{
   color:#666;
   font-size: .12rem;
   margin-top:.09rem;
   margin-left:.04rem;
}
.header .BizHeader_logo  i{
   color:#666;
    font-size: .10rem;
    margin-top:.1rem;
}
.header .BizHeader-detail{
    width:1.57rem;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: space-between
}
.header .BizHeader-detail span{
    font-size: .12rem;
    color:#666;
}
</style>
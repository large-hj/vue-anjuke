<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <div  class="hotSearch">
        <h3>热搜楼盘</h3>
        <div class="search-item" >
            <div class="search-tag" v-for="(item,index) in menu" :key="index">{{item}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            menu:["世茂国风长安.云棠","观承望溪","首开香溪郡","融创阿朵小镇","永清融创城","青岛东方影都","融创奥城","大运河智慧中心","北京壹号院","尚峯壹號"]
        }
    }
};
</script>

<style lang="scss" scoped>
.hotSearch{
    width:100%;
    height:.2.8rem;
    background: #fff;
    padding:.1rem;
  
}
.hotSearch h3{
    width:100%;
    color: #7f828b;
}
.search-item{
    width:3rem;
    height:1.68rem;
}
.search-item .search-tag{ 
    border: 1px solid #e6e6e6;
    border-radius: .03rem;
    height: .3rem;
    padding: 0 .12rem;
    margin: .1rem .1rem 0 0;
    line-height: .3rem;
    text-align: center;
    font-size: .12rem;
    float: left;
    display: inline-block;
    
  
}
</style>
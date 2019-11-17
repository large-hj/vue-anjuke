<template>
  <van-sticky>
      <div class="filter-bar">
        <div class="select" v-for="(item,index) in list" :key="index">
          <div class="title">
            <span>{{item.title}}</span>
            <i :class="item.icon"></i>
          </div>
        </div>
      </div>
    </van-sticky>
</template>

<script>
export default {
  name: "SelectBar",
  data() {
    return {
      list: [
            {
                title: "区域",
                icon: "iconfont icon-jiantou-copy-copy-copy",
                path:"/area"
            },
            {
                title: "价格",
                icon: "iconfont icon-jiantou-copy-copy-copy",
            },
            {
                title: "户型",
                icon: "iconfont icon-jiantou-copy-copy-copy",
            },
            {
                title: "更多",
                icon: "iconfont icon-jiantou-copy-copy-copy",
            },
            {
                icon: "iconfont icon-paixu"
            }
         ]
    };
  }
};
</script>

<style lang="scss" scoped>
.filter-bar {
    width: 100%;
    height: 0.44rem;
    display: flex;
    justify-content: space-between;
    background: #fff;
    .select {
        height: 0.44rem;
        display: flex;
        width: 20%;
        justify-content: center;
        align-items: center;
        .title {
            height: 0.44rem;
            display: flex;
            align-items: center;
            justify-content: center;
            span {
                font-size: 0.12rem;
            }
        }
        i{
            font-size: 0.14rem;
            color: #ccc;
            padding-left: 0.04rem;
        }   
    } 
}

</style>
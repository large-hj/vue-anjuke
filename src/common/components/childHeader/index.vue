<template>
  <div class="All_header">
    <a href>
      <i class="iconfont icon-ico_leftarrow"></i>
    </a>
    <div class="h-search" id="hSearch">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" placeholder="搜索新房楼盘或地址">
    </div>
    <div class="map">
      <em class="iconfont icon-shangjiantou"></em>
      <p>导航</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChildHeader",
};
</script>

<style lang="scss" scoped>
.All_header {
  width: 100%;
  height: 0.46rem;
  z-index: 102;
  top: 0px;
  left: 0px;
  background-color: #62ab00;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.1rem;
}
.All_header a {
  height: 0.3rem;
  width: 0.7rem;
  font-size: 0.18rem;
  color: #fff;
}
.h-search {
    height: 0.3rem;
    width: 2.42rem;
    background-color: #fff;
    opacity: 0.9;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.04rem;
    color: #999;
    font-size: 0.14rem;
    padding-left: 0.12rem;
}
.map {
  width: 0.39rem;
  height: 0.3rem;
  margin-left: 0.05rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.12rem;
  color: #fff;
}
</style>
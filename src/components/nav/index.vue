<template>
    <div class="new_nav">
        <div class="search_box">
        <i class="iconfont icon-sousuo"></i>
        <input type="search" class="search" placeholder="请输入楼盘名称或地址" />
        </div>
        <div class="iconfont icon-ditu map"></div>
    </div>
</template>

<script>
export default {
    name:"Nav"
};
</script>

<style  scoped>
.new_nav {
  width: 100%;
  height: 0.46rem;
  background: #fff;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.new_nav .search_box {
  width: 90%;
  height: 0.36rem;
  background: #f8f8f8;
  color: #676c73;
  position: relative;
}
.new_nav .search_box i {
  position: absolute;
  left: 0.05rem;
  top: 0.08rem;
  font-size: 0.2rem;
  padding-right: 0.05rem;
  border-right: 0.8px solid #ccc;
}
.new_nav .search_box .search {
  position: absolute;
  width: 1.4rem;
  height: 0.36rem;
  border: 0;
  text-align: center;
  background: #f8f8f8;
  left: 0.4rem;
}
.new_nav .map {
  font-size: 0.18rem;
  color: #3cb950;
}
</style>
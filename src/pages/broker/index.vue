<template>
  <div class="box_broker">
    <header class="header">
      <span>安居客</span>
      <span>同区域楼盘</span>
    </header>
    <div class="nav">
      <div class="nav1">区域</div>
      <div class="nav2">服务</div>
    </div>
    <div class="content">
      <div class="content1">
        <img
          src="https://pic1.ajkimg.com/display/anjuke/eb8711cdd6d9fdc1aa47631d0b336bcf/658x874x69x0/100x133.jpg"
        />
      </div>
      <div class="content2">
        <div class="info">
          <span class="name">陈小明</span>
          <a href class="phone">电话咨询</a>
        </div>
        <div>
          <i></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.46rem;
  background: #62ab00;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header span {
  font-size: 0.14rem;
  color: #fff;
}
/*************导航**************/
.nav {
  height: 0.46rem;
  background: powderblue;
  display: flex;
}
.nav .nav1,
.nav2 {
  width: 100%;
  padding: 0 0.15rem;
  text-align: center;
  line-height: 0.46rem;
  font-size: 0.14rem;
  color: #333333;
}
/* list */
.content {
  height: 1.3rem;
  padding: 0.13rem;
  display: flex;
}
.content1 {
  width: 0.7rem;
  background: seashell;
  height: 100%;
}
.content1 > img {
  width: 0.7rem;
  height: 100%;
}
.content2 {
  width: 2.2rem;
  background: darkorange;
  flex-direction: column;
  display: flex;
  .info {
    height: 0.225rem;
    display: flex;
    justify-content: space-between;
    .name {
      display: inline-block;
      vertical-align: middle;
      font-size: 0.17rem;
      color: #333;
    }
    .phone {
      display: inline-block;
      width: 0.76rem;
      height: 0.24rem;
      line-height: 0.24rem;
      line-height: 24px;
      color: #62ab00;
      border: 1px solid #62ab00;
      border-radius: 0.04rem;
      text-align: center;
      margin-right: 0.16rem;
      font-size: 0.12rem;
    }
  }
}
</style>
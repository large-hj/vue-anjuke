<template>
  <div class="city_container" ref="cityContainer">
   
      <div class="city_body" >
        <div class="title_box">
            <v-touch tag="i" @tap="handleB()" class="iconfont icon-mjiantou-copy">返回</v-touch>
            <div class="title">选择城市</div>
        </div>
        <div class="cl-c-search">
          <router-link tag="div" to="/searchCities" class="cl-c-s-btn">
              <i class="iconfont icon-sousuo"></i>城市/拼音
          </router-link>
        </div>
        <!--热门城市-->
        <div class="hot_city">
          <div class="hot_title">热门城市</div>
          <div class="hot_city_list">
            <div class="hot_city_name" v-for="item in hotCity" :key="item.id">{{item.nm}}</div>
          </div>
        </div>
        <!--城市列表-->
        <div class="city_list" ref="cityList">
          <div class="city_list_item" v-for="(item,index) in cityList" :key="index">
            <div class="city_title_letter">{{item.index}}</div>
            <div class="city_list_name">
              <v-touch
                tag="div"
                @tap="handleCityTo(child)"
                class="city_list_name_item"
                v-for="(child) in item.list"
                :key="child.id"
              >{{child.nm}}</v-touch>
            </div>
          </div>
        </div>
      </div>

    <!--城市列表下标-->
    <div class="city_list_index">
      <v-touch
        tag="div"
        @tap="handleTo(index)"
        class="index_item"
        v-for="(item,index) in cityList"
        :key="item.id"
      >{{item.index}}</v-touch>
    </div>
    <router-view></router-view>
  </div>
</template>



<script>
import { mapState } from "vuex";
export default {
name: "City",
  created() {
      if (
      !(sessionStorage.getItem("cityList") && sessionStorage.getItem("hotCity"))
    ) {
      this.$store.dispatch("city/handleAsyncGetCity");
    }
  },
   computed: {
    ...mapState({
      cityList: state => state.city.cityList,
      hotCity: state => state.city.hotCity
    })
  },
   methods: {
    handleTo(index) {
      console.log(index)
      let t = this.$refs.cityList.querySelectorAll(".city_title_letter")[index]
        .offsetTop;


    this.$refs.scroll.handleScrollTo(-t);
     //this.$refs.cityContainer.scrollTop = 200;

      //this.$refs.cityContainer.scrollTop = t;
    },
    handleCityTo(child){
      let path = this.$route.params.path || "/movie";
      this.$router.push(path);
      this.$store.commit("city/handleUpdateCity",child)
    },
    handleB(){
      this.$router.back();
    }
  }
  
};

</script>


<style scoped>
.city_body {
  background: #ebebeb;
  
}
.title_box{
   width:100%;
  height:.5rem;
  display: flex;
 align-items: center;
}
.title{
  font-size: .18rem;
  text-align: center;
  line-height: .5rem;
  background: #e8e8e8;
  padding-left: .8rem;
}
.cl-c-search {
    height: .5rem;
    background-color: #e4e4e7;
    padding: .08rem .22rem;
    box-sizing: border-box;
}
.cl-c-s-btn {
    background-color: #FFF;
    border-radius: .05rem;
    overflow: hidden;
    height: 100%;
    line-height: .34rem;
    /* width: 100%; */
    text-align: center;
    font-size: .13rem;
    color: #969696;
}
/*热门城市*/
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}
.hot_title{
  font-size: .18rem;
  
}
.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
    width:100%;
   line-height: 0.5rem;
    margin-left: 0.26rem;
    font-size: 0.16rem;
    border-bottom: 2px solid #e6e6e6;
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
  line-height: 0.5rem;
    margin-left: 0.26rem;
    width: 100%;
    border-bottom: 2px solid #e6e6e6;
    font-size: 0.16rem;
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
  top: 0.2rem;
}
.city_list_index > div {
 padding: 0.02rem 0.05rem;
    font-size: 0.1rem;
}
</style>
<template>
<<<<<<< HEAD
  <div class="city_body">
    <!--热门城市-->
    <div class="hot_city">
      <div class="hot_title">热门城市</div>
      <div class="hot_city_list">
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
        <div class="hot_city_name">北京</div>
      </div>
    </div>
    <!--城市列表-->
    <div class="city_list">
      <div class="city_list_item">
        <div class="city_title_letter">A</div>
        <div class="city_list_name">
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
        </div>
      </div>
      <div class="city_list_item">
        <div class="city_title_letter">A</div>
        <div class="city_list_name">
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
        </div>
      </div>
      <div class="city_list_item">
        <div class="city_title_letter">A</div>
        <div class="city_list_name">
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
          <div class="city_list_name_item">北京</div>
        </div>
      </div>
    </div>
    <!--城市列表下标-->
    <div class="city_list_index">
      <div class="index_item">A</div>
      <div class="index_item">B</div>
      <div class="index_item">C</div>
      <div class="index_item">D</div>
      <div class="index_item">E</div>
=======
  <div class="city_container" ref="cityContainer">
   
      <div class="city_body" >
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
>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b
    </div>
  </div>
</template>


<<<<<<< HEAD
<script>
export default {};
=======

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
    }
  }
  
};

>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b
</script>


<style>
.city_body {
  background: #ebebeb;
}

/*热门城市*/
.hot_title,
.city_title_letter {
  line-height: 0.6rem;
  padding-left: 0.26rem;
  font-size: 0.28rem;
}

.hot_city_list,
.city_list_name {
  width: 96%;
  background: #f5f5f5;
  padding-bottom: 0.16rem;
  padding-right: 0.6rem;
  display: flex;
  flex-wrap: wrap;
}
.hot_city_name {
<<<<<<< HEAD
  margin-top: 0.3rem;
  margin-left: 0.26rem;
  width: 1.9rem;
  height: 0.66rem;
  background: #fff;
  text-align: center;
  line-height: 0.66rem;
  font-size: 0.28rem;
  border: 2px solid #e6e6e6;
=======
    margin-top: 0.3rem;
    margin-left: 0.26rem;
    width: 0.9rem;
    height: 0.3rem;
    background: #fff;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.16rem;
    border: 2px solid #e6e6e6;
>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b
}

.city_list > div {
  width: 100%;
}
.city_list_name_item {
<<<<<<< HEAD
  line-height: 0.9rem;
  margin-left: 0.26rem;
  width: 100%;
  border-bottom: 2px solid #e6e6e6;
  font-size: 0.28rem;
=======
 line-height: 0.5rem;
    margin-left: 0.26rem;
    width: 100%;
    border-bottom: 2px solid #e6e6e6;
    font-size: 0.16rem;
>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b
}

/*城市列表下标*/
.city_list_index {
  position: fixed;
  right: 0;
<<<<<<< HEAD
  top: 1rem;
}
.city_list_index > div {
  padding: 0.1rem 0.05rem;
  font-size: 0.25rem;
=======
  top: 0.2rem;
}
.city_list_index > div {
 padding: 0.02rem 0.05rem;
    font-size: 0.1rem;
>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b
}
</style>
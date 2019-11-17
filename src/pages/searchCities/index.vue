<template>
  <div class="search_box">
    <div class="search-bar">
      <div class="search">
        <div>
          <sub class="iconfont icon-sousuo"></sub>
          <input type="type" placeholder="请输入楼盘名称或地址" v-model="value" />
        </div>
        <v-touch tag="sub" @tap="handleClear()" class="clear" v-if="flag">x</v-touch>
      </div>
      <v-touch tag="span" @tap="handleCancel()" class="cancel">取消</v-touch>
    </div>
    <div class="txt-area" v-show="flag">
      <li v-for="(item,index) in  cities" :key="index">{{item.nm}}</li>
    </div>
  </div>
</template>

<script>
import { SearchCityApi } from "@api/index";
import {throttle} from '@utils/searchThrottle'
export default {
  name: "SearchCities",
  data() {
    return {
      value: "",
      list: [],
      cities: [],
      flag: false,
      status: true
    };
  },
  methods: {
    handleCancel(){
      this.$router.back();
    },
     handleClear(){
      this.value='',
      this.flag=false,
      this.status=true
    }
  },
  watch: {
    async value(newVal) {
         throttle(async ()=>{
            let data = await SearchCityApi(this.$store.state.city.cityId, newVal);
            for (var i = 0; i < data.data.cities.length; i++) {
                let letterFirst = data.data.cities[i].py.slice(0, 1).toUpperCase();
                if (letterFirst === newVal.toUpperCase()) {
                this.cities.push({
                    id: data.data.cities[i].id,
                    nm: data.data.cities[i].nm
                });
                }
            }
        },300)
         if(newVal){
            this.flag=true,
            this.status=false
        }
     },
  }
};
</script>

<style scoped>
.search_box {
  width: 100%;
  height: 100%;
  padding: 0 0.1rem;
}
.search-bar {
  width: 100%;
  height: 0.55rem;
  background: #f4f4f4;
  padding: 10px;
  display: flex;
}
.search {
  width: 90%;
  height: 100%;
  font-size: 0.12rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cancel {
  width: 20%;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.35rem;
  color: #62ab00;
}
.clear{
  width:.15rem;
  height:.15rem;
  border:1px solid #f0f0f0;
  background: #f0f0f0;
  color:#fff;
  border-radius: 50%;
  font-size: .12rem;
 text-align: center;
 line-height: .15rem;
}
.txt {
  height: 100%;
  background: #f0f0f0;
}

.search_box li {
  height:.4rem;
  font-size: 0.14rem;
  color: #001;
  padding: 0 0.5rem 0;
  margin-bottom: 0.1rem;
  border-bottom: 1px solid #f0f0f0;
}
.search {
  display: flex;
  justify-content: space-between;
  font-size: 0.12rem;
  padding: 0.1rem;
  align-items: center;
}
</style>
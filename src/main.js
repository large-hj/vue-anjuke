import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components"
import "@common/filter"
import VueTouch from "vue-touch";
import store from "./store"
import "./lib/loading/index.js"
import axios from 'axios';//引入axios组件
axios.defaults.withCredentials=true;  //跨域保存session有用
axios.defaults.baseURL = "http://localhost:9000"; //打包的时候直接删掉，默认基础路径在这里配置
//将 axios 赋值给 Vue，方便在子组件里面使用
Vue.prototype.$reqs = axios;
Vue.use(VueTouch,{name:"v-touch"});
Vue.config.productionTip = false

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import store from './store'
import  router from "./router"
import VueTouch from "vue-touch";
import "@common/components"
import { Search } from 'vant';
Vue.use(Search);
import { Sticky } from 'vant';
Vue.use(Sticky);
Vue.use(VueTouch,{name:"v-touch"});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

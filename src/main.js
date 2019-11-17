import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components"
import "@common/filter"
import VueTouch from "vue-touch";
import store from "./store"
import "./lib/loading/index.js"
import { Sticky } from 'vant';
Vue.use(VueTouch,{name:"v-touch"});
Vue.config.productionTip = false
import { Search } from 'vant';
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);
Vue.use(Search);
Vue.use(Sticky);
new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')

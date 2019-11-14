import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import router from "./router"
import "@common/components"
import "@common/filter"
import VueTouch from "vue-touch";

Vue.use(VueTouch,{name:"v-touch"});
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import "@common/components"
import "@common/filter"
import VueTouch from "vue-touch";
<<<<<<< HEAD
import store from "./store";
=======
import store from "./store"
>>>>>>> hj
import "./lib/loading/index.js"
Vue.use(VueTouch,{name:"v-touch"});
Vue.config.productionTip = false

new Vue({
  store,
  router,

  render: h => h(App)
}).$mount('#app')

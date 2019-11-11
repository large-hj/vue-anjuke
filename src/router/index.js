import Vue from "vue";
import VueRouter from "vue-router"
import newHouse from "./newHouse"
Vue.use(VueRouter)

const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/newHouse"
        },
        newHouse
    ]
})
 export default router;
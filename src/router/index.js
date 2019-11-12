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
        newHouse,
        {
            name:"allHouse",
            path:"/allHouse",
            component:_=>import("@pages/allHouse")       
        },
        {
            name:"nowSale",
            path:"/nowSale",
            component:_=>import("@pages/nowSale")       
        }
    ]
})
 export default router;
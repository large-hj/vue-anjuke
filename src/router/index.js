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
        },
        {
            path:"/houseDetail/:id",
            component:_=>import("@pages/houseDetail"),
            name:"houseDetail",
            props:true
        },
        {
            path:"/search",
            component:_=>import("@pages/search"),
            name:"search"
        }
        
    ]
})
 export default router;
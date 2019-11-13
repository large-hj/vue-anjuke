import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
const router = new VueRouter({
    mode:"hash",
    routes:[
        {
            path:"/",
            redirect:"/neighborhood"
        },
         /************通过路由走neighborhood页面***************** * */
        {
            path:"/neighborhood",
            component:_=>import("@pages/neighborhood"),
            name:"neighborhood",
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
         /************通过路由走海外详情页面***************** * */
         {
            path:"/hwdetail/:id",
            component:_=>import("@pages/hwdetail"),
            name:"hwdetail",
            props:true
        },
        /************通过路由走search页面***************** * */
        {
            path:"/search",
            component:_=>import("@pages/search"),
            name:"search",
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
         /************通过路由走经纪人页面***************** * */
         {
            path:"/broker",
            component:_=>import("@pages/broker"),
            name:"broker",
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
        
    ]
})


export default router;
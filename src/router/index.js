import Vue from "vue";
import VueRouter from "vue-router";
import city from "./city"
import Register from "../components/register"
import Login from "../components/lo"

Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[

        {
            path:"/",
            redirect:"/movie"
        },
        {
            path:"/lore",
            redirect:"/lore/login"
        },
        {
            path:"/movie",
            component:_=>import("@pages/movie"),
            name:"movie",
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
        city,
       

        {
            path:"/detail/:id/:index/:loupan",
            name:"detail",
            props:true,
            component:_=>import("@pages/detail"),
            meta:{
                flag:false
            }
        },
        {
            path:"/zx",
            name:"zhuangxiu",
            props:true,
            component:_=>import("@pages/zhuangxiu"),
            meta:{
                flag:false
            }
        },
        {
            path:"/zxq",
            component:_=>import("@pages/neighborhood"),
            name:"neighborhood",
            meta:{
                flag:true,
                requiredAuth:false
            },
        },
        {
            path:"/lore",
            component:_=>import("@pages/lore"),
            name:"lore",
            meta:{
                flag:true,
                requiredAuth:false
            },
            children:[
                // {
                //     path:"/lore",
                //     redirect:"/lore/login"
                // },
                
                {
                    path:"register",
                    component:Register,
                    name:"register",
                    meta:{
                        flag:true,
                        requiredAuth:false
                    },
                },
                {
                    path:"login",
                    component:Login,
                    name:"login",
                    meta:{
                        flag:true,
                        requiredAuth:false
                    },
                },
                
                
            ]
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
          /************通过路由走海外详情页面***************** * */
        {
            path:"/hwdetail/:id",
            component:_=>import("@pages/hwdetail"),
            name:"hwdetail",
            props:true,
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

         /************通过路由走免费看房页面***************** * */
              {
            path:"/mfkf",
            component:_=>import("@pages/freelookhouse"),
            name:"freelookhouse",
            meta:{
                flag:true,
                requiredAuth:false,
                requiredAuth:false
            },
        },
    ]
})



// router.beforeEach((to,from,next)=>{
//     if(to.path !="/login" && to.meta.requiredAuth){
//         if(localStorage.getItem("token")){
//             next();
//         }else{
//             next({name:"login",params:{to:to.path}})
//         }

//     }else{
//         next();
//     }
// })

export default router;
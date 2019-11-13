import Vue from "vue";
import VueRouter from "vue-router";
import city from "./city"
Vue.use(VueRouter);


const router = new VueRouter({
    mode:"hash",
    routes:[

        {
            path:"/",
            redirect:"/movie"
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
            path:"/login",
            name:"login",
            component:_=>import("@pages/login"),
            meta:{
                flag:false
            }
        },
        {
            path:"/detail",
            name:"detail",
            component:_=>import("@pages/detail"),
            meta:{
                flag:false
            }
        },
    ]
})



router.beforeEach((to,from,next)=>{
    if(to.path !="/login" && to.meta.requiredAuth){
        if(localStorage.getItem("token")){
            next();
        }else{
            next({name:"login",params:{to:to.path}})
        }

    }else{
        next();
    }
})

export default router;
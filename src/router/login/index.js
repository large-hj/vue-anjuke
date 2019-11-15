export default {
    path:"/login",
    component:_=>import("@pages/login"),
    name:"login",
    meta:{
        flag:true,
        requiredAuth:false
    },
    // children:[
    //     {
    //         path:"/login",
    //         redirect:"/login/login"
    //     },
    //     {
    //         path:"login",
    //         component:_=>import("@components/login"),
    //         name:"denglu",
    //         meta:{
    //             flag:true,
    //             requiredAuth:false
    //         },
    //     },
    //     {
    //         path:"register",
    //         component:_=>import("@components/register"),
    //         name:"register",
    //         meta:{
    //             flag:true,
    //             requiredAuth:false
    //         },
    //     }
    // ]
}
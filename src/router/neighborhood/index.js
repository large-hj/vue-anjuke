export default {
    path:"/neighborhood",
    component:_=>import("@pages/neighborhood"),
    name:"neighborhood",
    meta:{
        flag:true,
        requiredAuth:false
    }
}
import http from "@utils/request";
export const neighborhoodApi=(city_id)=>http({
    method:"get",
    url:"/home/prop/recommend",
   data:{
    city_id,
    }
})



//https://m.anjuke.com/home/prop/recommend?city_id=14
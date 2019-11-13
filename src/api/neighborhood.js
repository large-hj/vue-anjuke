import http from "@utils/request";
export const neighborhoodApi=(page)=>http({
    method:"get",
    url:"/haiwai/list-usa/?page=2",
   data:{
    page,
    }
})


//https://m.anjuke.com/haiwai/list-usa/?page=2
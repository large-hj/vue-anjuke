import http from "@utils/request";
/* 

城市ID接口
*/
export const indexNowApi = (city_id)=>http({
    method:"POST",
    url:"/home/prop/recommend",
  data:{
    city_id,
  }
})

/* 
    房子详情接口
    https://m.anjuke.com/bj/loupan/ranktoprecommend/?loupan_id=435641

*/

export const HouseDetailApi = (loupan_id)=>http({
    method:"get",
    url:"/bj/loupan/ranktoprecommend/?",
    data:{
        loupan_id
    }
})

/* 楼盘ID接口 */
export const loupanApi = (loupan)=>http({
    method:"get",
    url:"/bj/loupan/"+loupan+"/ajaxdianpin/",
    data:{
        

    }
})
// 装修
export const zxApi = ()=>http({
    method:"get",
     url:"/jiazhuang/list/case/?lon=&lat=&city_id=14",
    
 
    data:{
    }
})


/* 
  url:"/jiazhuang/list/case/?lon=&lat=&city_id=14",
*/


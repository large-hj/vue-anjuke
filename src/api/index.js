import http from "@utils/request";
<<<<<<< HEAD

export const indexNowApi = (cityId)=>http({
    method:"get",
    
    url:"/home/prop/recommend",
    data:{
        cityId,
=======
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
>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b
    }
})


<<<<<<< HEAD
// export const movieCommingApi = (cityId)=>http({
//     method:"get",
//     url:"/api/movieComingList",
//     data:{
//         cityId:cityId
//     }
// })
=======
/* 
  url:"/jiazhuang/list/case/?lon=&lat=&city_id=14",
*/

>>>>>>> d8f167bf1e6c6aa069b8cdfb62cac6bee951540b

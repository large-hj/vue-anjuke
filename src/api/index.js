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

/**
 * 
 * @param:newHouseApi
 * 接口：新房
 */

export const newHouseApi = (cid)=>http({
  method:"get",
  url:"/xinfang/api/loupan/similarities",
  data:{
      cid,
  }
})

/**
* 
* @param:searchApi  kw:模糊查询的数据
* 接口:搜索楼盘
*/
export const searchApi = (cid,kw,history_url)=>http({
  method:"get",
  url:"/xinfang/api/home/suggest",
  data:{
      cid,
      kw,
      history_url,
      
    
  }
})

/**
* 
* @param:detailApi  
* 接口:详情
*/
export const detailApi = (cid)=>http({
  method:"get",
  url:"/xinfang/api/loupan/similarities",
  data:{
      cid,
  }
})


/**
* 
* @param:SearchCityApi  
* 接口:搜索城市
*/
export const SearchCityApi = ( cid,kw)=>http({
  method:"get",
  url:"/api/cityList",
  data:{
      cid,
      kw,
  }
})
/**
 * 
 * @param:SecondHandApi
 */

export const SecondHandApi = ( from,page)=>http({
  method:"get",
  url:"/bj/sale/",
  data:{
      from,
      page,
     
  }
})
/* 
  /sale/all/b15/?page=2",
*/


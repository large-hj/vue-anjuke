import http from "@utils/request";

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
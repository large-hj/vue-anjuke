import http from "@utils/request";

export const newHouseApi = (cid)=>http({
    method:"get",
    url:"/xinfang/api/loupan/similarities",
    data:{
        cid:cid
    }
})

/**
 * 
 * @param:searchApi  kw:模糊查询的数据
 * 接口:搜索
 */
export const searchApi = (cid,kw)=>http({
    method:"get",
    url:"/xinfang/api/home/suggest/",
    data:{
        cid,
        kw
    }
})

/**
 * 
 * @param:detailApi  kw:模糊查询的数据
 * 接口:详情
 */
export const detailApi = (cid)=>http({
    method:"get",
    url:"/xinfang/api/loupan/similarities",
    data:{
        cid
    }
})







import http from "@utils/request";

export const newHouseApi = (cid)=>http({
    method:"get",
    url:"/xinfang/api/loupan/similarities",
    data:{
        cid:cid
    }
})







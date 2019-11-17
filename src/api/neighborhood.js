import http from "@utils/request";
export const neighborhoodApi=(page)=>http({
    method:"get",
    url:"/haiwai/list-usa/?page=2",
   data:{
    page,
    }
});
// https://m.anjuke.com/bj/tycoon/?from=m_jjr_changeesf&ajax=1&p=2
/******详情页********/
export const hwdetailApi=(loupan_id)=>http({
    method:"get",
    url:"/oversea/loupan/view/?loupan_id="+loupan_id,
});


/*****************模糊查询********************/

export const searchApi=(value)=>http({
    method:"get",
    url:"/ajax/suggest/?q="+value+"&limit=8",
});
//https://m.anjuke.com/ajax/suggest/?q=c&limit=8
/*****************经纪人********************/
export const brokerApi=(p)=>http({
    method:"get",
    url:"/bj/tycoon/?from=m_jjr_changeesf&ajax=1&p=2",
});
//https://m.anjuke.com/bj/tycoon/?from=m_jjr_changeesf&ajax=1&p=2
// https://m.anjuke.com/oversea/loupan/view/?loupan_id=6019344

//https://m.anjuke.com/haiwai/list-usa/?page=2

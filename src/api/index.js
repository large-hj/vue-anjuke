import http from "@utils/request";

export const indexNowApi = (cityId)=>http({
    method:"get",
    
    url:"/home/prop/recommend",
    data:{
        cityId,
    }
})


// export const movieCommingApi = (cityId)=>http({
//     method:"get",
//     url:"/api/movieComingList",
//     data:{
//         cityId:cityId
//     }
// })

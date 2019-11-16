<template>
     <div class="pack_wrap">
        <div class="BizXfThemepack" v-for="(item,index) in items" :key="index">
            <div class="them_one" v-for="(pro,index) in item.activities" :key="index">
                <a href="#">
                    <span class="item_txt">
                        <span class="item_discount ">{{pro.discount}}</span>
                        <span class="item_tips">{{pro.tips}}</span>
                    </span>
                    <span class="item_bg"></span>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Activities",
    data(){
        return{
            items:[
                {
                     activities:[
                        {
                            discount:"活动优惠",
                            tips:"参与即享受更多..."
                        },
                        {
                            discount:"楼盘热榜",
                            tips:"热门点评榜"
                        },
                    ]      
                },
                {
                     activities:[
                        {
                            discount:" 北科建水岸雁栖",
                            tips:"聚合品牌价值力量"
                        },
                        {
                            discount:" 厨卫全明",
                            tips:"小中见大，厨卫全明的房子，一般户型都不会太差"
                        },
                    ]      
                },
                
            ]
               
           
              
        }
    }

}
</script>
<style lang="scss" scoped>
    .pack_wrap{
    height:1.64rem;
    margin:.15rem .15rem  0;
    display: flex;
    flex-direction: column;
}
.BizXfThemepack{
    width:100%;
    height:.8rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: .02rem;
}
.BizXfThemepack .them_one{
    width:49%;
    height:.76rem;
    background: #F1F6F7;
    margin-bottom: 2px;
    margin-right: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    float: left;
}
.BizXfThemepack .them_one a{
   width:100%;
   height:100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding:.05rem;
}
.BizXfThemepack .them_one a .item_txt{
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    white-space: nowrap;
    overflow: hidden;
    width:50%;
    text-overflow: ellipsis;
 }
.BizXfThemepack a .item_txt .item_discount{
    display: block;
    font-size:.14rem;
    color: #1f2326;
    line-height: .16rem;
    width:100%;
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.BizXfThemepack a .item_txt .item_tips{
    display: block;
    font-size:.11rem;
    color: #1f2326;
    width:100%;
     white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.BizXfThemepack .item_bg{
   width:.65rem;
   height:.8rem;
   background: url(https://pages.anjukestatic.com/kfstouch/xinfang-mobile/img/fuwu/loupan/theme_pack_icons.png) no-repeat -140px -80px;;
   background-size: 280px 160px;
}
.BizXfThemepack .hot{
    background-position: 0 -80px;
 }
 .BizXfThemepack .low_price{
    background-position: 0 0;
 }
 .BizXfThemepack .School{
    background-position: -70px 0;
 }
</style>
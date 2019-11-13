<template>
     <div class="main_box">
        <ul>
            <router-link tag="li" :to="'/houseDetail'+item.id" v-for="(item,index) in newHouseList" :key="index">
                <div class="main_img">
                    <img :src="item.default_image" alt="">
                </div>
                <div class="main_txt">
                    <h4>{{item.loupan_name}}</h4>
                    <span>{{item.region_title}} {{item.subregion_title}} | 建面 {{item.jianzhu_area}}</span>
                    <p>{{item.new_price.show_price}}{{item.new_price.unit}}</p>
                    <div class="label_tip">
                        <em class="saleHouseTag on-sale">{{item.new_status_sale}}</em>
                        <em class="defaultTag ui-tag_grey">{{item.display_price_type_str}}</em>
                        <em class="defaultTag ui-tag_grey">{{item.loupan_tags[1]}}</em>
                        <em class="defaultTag ui-tag_grey">{{item.loupan_tags[2]}}</em>
                    </div>
                    <div class="g-overflow">
                        <i>热</i>
                        <span class="adv-ctx" >{{item.rank_desc}}</span>
                    </div>
                </div>
            </router-link>
            <router-view></router-view>
        </ul>
    </div>
</template>

<script>
import { newHouseApi } from "@api/newHouse";
export default {
    name:"HouseList",
    data(){
        return{
            newHouseList:[]
        }
    },
    created() {
       this.handleGetNewHouseList(10);
   },
   methods:{
      async  handleGetNewHouseList(cid){
            let data = await newHouseApi(cid)
           this.newHouseList=data.result.rows;
       }
   }
   
}
</script>

<style lang="scss">
    .main_box,ul{
    width:100%;
    height:100%;
    background: #fff;
    display: flex;
    flex-direction: column;
}
.main_box li{
   width:100%;
   height:1.46rem;
   padding:.15rem .15rem .15rem 0;
   display: flex;
   justify-content: space-between; 
   border-bottom: 1px solid #f0f0f0;
}
.main_box li .main_img{
    width:1rem;
    height:.9rem;
    margin-left:.15rem;
}
.main_box li .main_img img{
   width:100%;
   height:100%;
   border:0;
}
.main_box li .main_txt{
    width:2.16rem;
    height:.9rem;
    margin-left:.10rem;
    display: flex;
    flex-direction: column; 
}
.main_box li .main_txt h4{
    color: #1f2326;
    font-weight: 700;
    font-size: .17rem;
    line-height: .17rem;
}
.main_box li .main_txt span{
    margin-top: .04rem;
    font-size: .13rem;
}
.main_box li .main_txt p{
    color: #fa4600;
    font-size: .13rem;
    font-weight: 700;
}
.main_box li .main_txt .label_tip{
    height:.2rem;
    width:100%;
    display: flex;
}
.main_box li .main_txt .label_tip em{
    display: inline-block;
    font-size: .12rem;
    margin-right: .05rem;
}
.main_box li .main_txt .label_tip .on-sale{
    background-color: #76ce84;
    color: #fff;
}
.main_box li .main_txt .label_tip .pending-sale{
    background-color: #f8b49a;
    color: #fff;
}
.main_box li .main_txt .label_tip .ui-tag_grey{
    background: #f3f5f7;
    color: #828890;
}
.main_box li .main_txt .g-overflow{
    width:100%;
    height:.17rem;
    display: flex;
    align-items: center;
    margin-top:.04rem;
}
.main_box li .main_txt  .g-overflow i{ 
    display: inline-block;
    font-size: .12rem;
    background: #f90;
    color:#fff;
    width:.15rem;
    height:.15rem;
    text-align: center;
    line-height: .15rem;
}
.main_box li .main_txt  .g-overflow .adv-ctx{ 
    font-size: .12rem;
    color:#666;
    margin-left:.05rem;
}

</style>
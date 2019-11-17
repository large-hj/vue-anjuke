<template>
    <div class="search_box">
        <div class="search">
            <van-search placeholder="请输入搜索关键词" v-model="value" />
            <v-touch tag="i" @tap="hanleTap">取消</v-touch>
        </div>
       <li v-for="(item,index) in list" :key="index">{{item.addr}}</li>
    </div>
</template>

<script>
import {SearchCityApi} from "@api/index"
export default {
    name:"SearchCities",
    data(){
        return{
            value:'',
            list:[]
        }
    },
    methods:{
        hanleTap(){
            this.$router.back()
        }
    },
    watch:{
        async value(newVal){
            let data = await SearchCityApi(this.$store.state.city.cityId,newVal);
             console.log(data)
          
            this.list=data.data.cinemas?data.data.cinemas.list:[]
             if(newVal=''){
                    document.removeChild("li");
             }
            
        },
       
    }

}
</script>

<style scoped>
    .search_box{
        width:100%;
        height:100%;
        padding:0 .1rem;
    }
    .van-search{
        width:90%;
        padding:0;
    }
    .search_box li{
        height:.4rem;
        font-size: .14rem;
        color:#001;
        padding:0 .5rem 0;
        margin-bottom:.1rem;
    }
    .search{
        display: flex;
        justify-content: space-between;
        font-size: .12rem;
        padding:.1rem;
        align-items: center;
    }
</style>
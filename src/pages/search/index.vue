<template>
  <div class="box">
    <div class="searchhead">
        <input type="text" class="search" placeholder="请输入国家或城市" v-model="value">
        <a href="" class="cancle">取消</a>
    </div>
    <div class="list_search" v-for="(item,index) in list" :key="index">
      <div class="information">
        <h3>{{item.address}}</h3>
      <div class="addresss">
        <span class="one">{{item.area_name}}-</span>
        <span class="two">{{item.block_name}}</span>
        <span class="three">{{item.address}}</span>
      </div>
      </div>
    </div>
    
  </div>
</template>
<script>
import {searchApi} from  "@api/neighborhood";

export default {
  
  name:"Search",
  data(){
    /*********做双数据绑定********/
    return{
      value:"",
      /*******************放搜索到的数据*/
      list:[]
    }
  },
  watch:{
    async value(newVal){
      let data=await searchApi( this.value)
      console.log(data);
      this.list=data;
    }
  }
};
</script>
<style scoped lang="scss">
.searchhead {
  position: relative;
  height: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  padding: 0.07rem 0.15rem;
  height: 50px;
  width: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 7px 15px;
  background: #ececec;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
  .search{
    display: block;
    height: 0.3rem;
    width: 100%;
    border-radius: 0.03rem;
    border: 1px solid #ebebeb;
    font-size: 0.14rem;
    background: #fff;
    color: #999;
    padding: 0 0 0 0.1rem;
    outline: 0;
  }
  .cancle{
    display: block;
    font-size: 0.14rem;
    width: 0.4rem;
    height: 0.3rem;
    line-height: 0.3rem;
    text-align: center;
    padding: 0;
    border: 0;
    color: #62ab00;
    margin-right: 0.05rem;
  }
}
/***************查询出来的列表************** */
.information{
  height: 0.546rem;
  padding: 0.08rem 0.1rem;
  display: flex;
  flex-direction: column;
  border-bottom:1px solid #cccc;
  h3{
    font-size: 0.15rem;
    color: #333;
  }
 .addresss{
   display: flex;
    .one,.two,.three{
    display: inline-block;
    font-size: 0.12rem;
    color: #9999;
    height: 0.14rem;
  }
  .three{
    padding: 0 0 0 0.1rem;
  }
 }
}
</style>
<template>
  <div>
    <div class="search-bar">
      <div class="search">
        <div>
             <sub class="iconfont icon-sousuo"></sub>
            <input type="type" placeholder="请输入楼盘名称或地址" v-model="value" />
        </div>
        <v-touch tag="sub" @tap="handleClear()" class="clear" v-if="flag">x</v-touch>
      </div>
      <v-touch tag="span" @tap="handleCancel()" class="cancel">取消</v-touch> 
    </div>
    <div class="search-ctx">
        <div class="hotSearch" v-if="status">
          <h3>热搜楼盘</h3>
          <div class="search-item">
            <div class="search-tag" v-for="(item,index) in menu" :key="index">{{item}}</div>
          </div>
        </div>
      <div class="list" v-show="flag" >
        <div class="item" v-for="(item,index) in list" :key="index" >
            <div class="name">
                 <div class="tit">
                    <p class="title">{{item.name}}</p>
                    <p class="other">别名:<strong >{{item.nameEm}}</strong></p>
                </div>
                <p class="sale-status">{{item.saleStatusName}}</p>
            </div>
            <div class="name">
                 <div class="tit">
                    <p class="other">{{item.addrEm}}</p>
                </div>
                <p class="sale-status">61207㎡</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {searchApi} from "@api/newHouse"
import {throttle} from '@utils/searchThrottle'

export default {
  data() {
    return {
      value: "",
      flag:false,
      status:true,
      list: [],
      menu: [
        "世茂国风长安.云棠",
        "观承望溪",
        "首开香溪郡",
        "融创阿朵小镇",
        "永清融创城",
        "青岛东方影都",
        "融创奥城",
        "大运河智慧中心",
        "北京壹号院",
        "尚峯壹號"
      ],
      url:'https:%2F%2Fm.anjuke.com%2Fbj%2Fxinfang%2F%3Ffrom%3Danjuke_home',
    };
  },
 

  watch: {
    async value(newVal) {
      throttle(async ()=>{
         let data = await searchApi(14,newVal,this.url);
         this.list=data.result.loupan?data.result.loupan:[];
         console.log(data)
      },300)
        if(newVal){
           this.flag=true,
           this.status=false
        }
       
    }
  },
  methods:{
    handleCancel(){
      this.$router.back();
    },
    handleClear(){
      this.value='',
      this.flag=false,
      this.status=true
    }
  }
};
</script>

<style lang="scss" >
.search-bar {
  width: 100%;
  height: 0.55rem;
  background: #f4f4f4;
  padding: 10px;
  display: flex;
}
.search {
  width: 90%;
  height: 100%;
  font-size: 0.12rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cancel {
  width: 20%;
  font-size: 0.12rem;
  text-align: center;
  line-height: 0.35rem;
  color: #62ab00;
}
.search-ctx {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0.55rem;
  right: 0;
  bottom: 0;
}
.hotSearch {
  width: 100%;
  height: 0.2.8rem;
  background: #fff;
  padding: 0.1rem;
}

.hotSearch h3 {
  width: 100%;
  color: #7f828b;
}
.search-item {
  width: 3rem;
  height: 1.68rem;
  margin-top:.1rem;
}
.search-item .search-tag {
  border: 1px solid #e6e6e6;
  border-radius: 0.03rem;
  height: 0.3rem;
  padding: 0 0.12rem;
  margin: 0.1rem 0.1rem 0 0;
  line-height: 0.3rem;
  text-align: center;
  font-size: 0.12rem;
  float: left;
  display: inline-block;
}
.list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 0.04rem;
  background: #fff;
  margin-top:.15rem;
}
.item {
  height: 0.55rem;
  width: 100%;
  border-bottom: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px;
}
.item .name {
  width: 100%;
  height: 0.24rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.name .tit {
      display: flex;
      
}
.name .tit .title{
        color: #333;
        font-size: .15rem;
        margin-right: 6px;   
         width:1.2rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;      
}
.name .tit .other{
    font-size: .12rem;
    color:#999;
    width:1.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.name .sale-status{
    font-size: .12rem;
    color:#999;
}
.match{
    color: red;
}
.clear{
  width:.15rem;
  height:.15rem;
  border:1px solid #f0f0f0;
  background: #f0f0f0;
  color:#fff;
  border-radius: 50%;
  font-size: .12rem;
 text-align: center;
 line-height: .15rem;
}
</style>
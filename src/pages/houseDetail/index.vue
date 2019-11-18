<template>
  <div class="detail">
        <div class="swipe">
            <img :src="detail.default_image" alt />
             <v-touch tag="div" @tap="handleClick()" class="icon iconfont icon-mjiantou-copy"></v-touch >
        </div>
       
    <div class="lpbase" id="basic-info">
        <div class="lptitle ">
            <h1 class="lpname ">{{detail.loupan_name}}</h1>
            <span class="iconfont icon-ziliaoduibi duibi-txt">加入对比</span>
        </div>
        <div class="lptags ui-box_group">
            <em class="wait-sale defaultTag1">{{detail.new_status_sale}}</em>
            <em class="defaultTag1 ui-tag_grey">{{detail.display_price_type_str}}</em>
            <em class="ui-tag_grey defaultTag1">{{detail.loupan_tags[0]}}</em>
            <em class="ui-tag_grey defaultTag1">{{detail.loupan_tags[1]}}</em>
        </div>
      <!-- 基本信息 -->
      <div class="lpinfo ui-box_top ui-border_top">
            <div class="ui-info">
                <label>售价</label>
                <div class="ui-txt_h1 ui-txt-red">
                    <span class="ui-txt_h3 ">{{detail.new_price.price_pending_desc}}</span>
                </div>
           
          <!-- 周边均价 -->
                <div class="near_price ui-txt_lh5" id="seo-anchor-zhoubian">
                    <span class="ui-txt-black">周边均价</span>
                    <span class="ui-line-overflow">52670元/m²</span>
                    <span class="wait-price ui-txt-midgrey iconfont icon-wenti"></span>
                </div>
             </div>
            <div class="ui-info kaipan">
                <label>开盘</label>
                <p>2019年11月中旬</p>
            </div>
            <div class="huxing">
                <p>
                    <label>户型</label>4室
                </p>
                <p>
                    <label>建面</label>{{detail.jianzhu_area}}
                </p>
            </div>
            <a href="" class="ui-info">
                <label>地址</label>
                <p class=" ui-txt-blue">{{detail.address}}</p>
                <i class="iconfont icon-location"></i>
            </a>
            <div href="#" class="moreInfo">更多信息</div>
      </div>
     
      <div class="ui-flex changeinfo">
            <span class="iconfont icon-biangeng-copy">变价通知</span>
            <span class="iconfont icon-tongzhi">开盘通知</span>
      </div>

    </div>
</div>
</template>

<script>
import { detailApi } from "@api/newHouse";

export default {
    name: "HouseDetail",
    props: ["index", "loupan_id"],
    data() {
        return {
        detail: {}
        };
    },
    created() {
        this.handleGetDetail(1);
        
    },
  methods:{
      async handleGetDetail(cid){
           let data = await detailApi(1);
            this.detail = data.result.rows[this.index];
      },
      handleClick(){
          this.$router.back();
      }
  }
};
</script>

<style lang="scss" scoped>

.detail {
    width: 100%;
    position:absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    padding-bottom:.5rem;
    overflow:auto;
    display: flex;
    flex-direction: column;
  
}
.swipe {
  width: 100%;
  height: 2.3rem;
  position: relative;
}
.swipe .icon{
    width:.4rem;
    background:rgba(0,0,0,0.2);
    height:.4rem;
    z-index:10;
    text-align: center;
    line-height: .4rem;
    position: absolute;
    top:0.1rem;
    left:.1rem;
    border-radius: 50%;
}
.swipe img {
  width: 100%;
  height: 100%;
  border: 0;
}
.lpbase{
    border:1px solid #f0f0f0;
    height:3.4rem;
    margin: -30px 10px 20px 10px;
    font-size: .12rem;
    color: #333;
    padding: 20px 20px 5px;
    position: relative;
    background: #fff;
}
.lptitle{
    display: flex;

}
.lpbase .duibi-txt{
     line-height: .28rem;
     font-size:.12rem;
     color: #8099af;
     padding-left:.02rem;
}
h1{
    margin-right: 85px;
    font-weight: 600;
    line-height: .28rem;
    font-size:.19rem;
    color: #1f2326;
}
.lptags .defaultTag1{
    padding: .03rem .05rem!important;
    font-size: .12rem;
    margin-right: .05rem;
    display: inline-block;
    text-align: center;
    height: .18rem;
    line-height: .18rem;
    color: #a3a8ad;
    background:#f3f5f7;
}
.lptags .wait-sale{
    color: #fff;
    background-color: #f8b49a;
}
.ui-txt-black {
    color: #43474d!important;
    font-size: .12rem;
    padding-left:.1rem;
}
.ui-txt_lh5 {
    font-size: .12rem;
    line-height: .19rem;
    color: #676c73;
}
.lpinfo {
    margin-top: .15rem;
    margin-top: .15rem;
    border-top:1px solid #f3f5f7;
    width:2.6rem;
    height:1.8rem;
    display: flex;flex-direction: column;
}
.ui-txt-blue{
    color: #8099af!important;
    font-size: .15rem;
}
.lpinfo label{
    color: #9aa0a6;
    height: .24rem;
    line-height: .24rem;
    font-size: .15rem;
    margin-right: .12rem;
}
.lpinfo .ui-info{
    display: flex;
    align-items: center;
}
.ui-info i{
    color:#fa4600;
    font-size: .2rem;
}
.ui-info .ui-txt_h3{
    color: #43474d;
    font-size: .15rem;
}
.ui-line-overflow{
    color: #fa4600;
}
.moreInfo{
    margin-top: .1rem;
    margin-bottom: .15rem;
    width:2.6rem;
    height:.4rem;
    line-height: .4rem;
    padding: 0 .42rem;
    font-size: .15rem;
    background: #f8f8f8;
    color: #8099af;
    text-align: center;
}
.ui-flex{
    width:2.6rem;
    height:.41rem;
    font-size: .15rem;
    color: #333;
    line-height:.4rem;
    position: relative;
    margin-bottom: -.05rem;
    border-top:1px solid #f3f5f7;
    margin-top:.25rem;
    display: flex;
}
.ui-flex span{
    width:1.3rem;
    height:.41rem;
    text-align: center;
    line-height: .41rem;
    color: #8099af;
}
</style>
<template>
  <div class="secondList">
    <div class="searchList">
      <li class="house_item">
        <div class="house-img-wrap">
          <img
            src="https://pic1.ajkimg.com/m/d3461960018178fc5d1271466c2bf90a/150x200.jpg?t=1"
            class="house-img"
          />
        </div>


        <div class="house-intro">
          <div class="house-title text-ellipse">副中心东6公里 国企开发现房 </div>
          <div class="house-address">
            <span class="house-address-region split-line">燕郊</span>
            <span class="house-address-block">京东CBD</span>
          </div>

          <div class="tag-wrap fix-clear">
            <div class="tag-item-anxuan">
              <span class="tag-anxuan-head">安选</span>
              <span class="tag-anxuan-tail">真实在售</span>
            </div>
            <div class="tag-item">近地铁</div>
            <div class="tag-item">环境优美</div>
            <div class="tag-item">繁华地段</div>
          </div>

          <div class="house-detail">
            <span class="split-line house-price house-detail-item">
              <i class="price-num">70</i>
              <i class="price-num-unit">万</i>
            </span>
            <span class="split-line house-zoom house-detail-item">1室1厅</span>
            <span class="house-area house-detail-item">52㎡</span>
          </div>
          <div class="broker broker-line">
            <div class="broker-img-wrap">
              <img
                class="broker-img"
                src="https://pic1.ajkimg.com/display/anjuke/0e006b2740d4c44866e9ac08214356bf/324x431x64x0/100x133.jpg"
                alt
              />
            </div>
            <span class="broker-name">吴振雪</span>
            <span class="broker-grade">4.2分</span>
            <span class="broker-company">河北万博尚诚房地产经纪有限公司</span>
          </div>
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import {SecondHandApi} from "@api/index"
export default {
    name:"secondList",
    data(){ 
        return{
            from:'anjuke_home'
        } 
    },
    created(){
        this.handleGetSecondHandList(this.from,2)
    },
    methods:{
         async  handleGetSecondHandList(from,page){
            let data = await SecondHandApi(from,page)
            console.log(data)
            
        }
    }
    
};
</script>

<style lang="scss" scoped>
.secondList {
  position: absolute;
  top: 1.5rem;
  left: 0;
  right: 0;
  bottom: 0;
}
.house_item {
  width: 100%;
  height: 1.42rem;
  padding: 15px 15px 12px  10px;
  display: flex;
  background: #fff;
  border-bottom: 0.5px solid rgba(230, 230, 230, 0.7);
}
.house-img-wrap {
    
    width: 1rem;
    height: .9rem;
    background: #ccc;
    margin-right: .1rem;
}
.house-img {
    width: 100%;
    height: 100%;
}
// .house-img-icon {
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     -webkit-transform: translate(-50%, -50%);
//     transform: translate(-50%, -50%);
//     width: 100%;
//     text-align: center;
// }
.quanjing-icon {
    border-radius: 50%;
    display: inline-block;
    background: url(//pages.anjukestatic.com/usersite/touch/img/comm/quanjing-icon.png) center no-repeat;
    background-size: contain;
}
.house-intro {
    width:1.8rem;
    line-height: 1;
    -webkit-box-flex: 1;
}
.house-title {
    font-size: .16rem;
    color: #1F2326;
    margin-bottom: 10px;
    width:1.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.text-ellipse {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.house-address {
    color: #676C73;
    font-size: .13rem;
    margin-bottom:.1rem;
}
.tag-wrap {
    font-size: .12rem;
    height: .2rem;
    overflow: hidden;
    margin-bottom: .05rem;
}
.tag-item-anxuan {
    font-size: .1rem;
    float: left;
    margin: 0 .05rem .1rem 0;
    border: 1px solid #02C26D;
    border-left: none;
    line-height: .16rem;
}
.tag-anxuan-head {
    padding: .01rem .06rem;
    color: #fff;
    background: linear-gradient(to right bottom, #02C26D, #7ED665);
}
.tag-anxuan-tail {
    padding: .03rem .06rem;
    color: #7ED665;
}
.tag-item {
    float: left;
    padding: 0 .06rem;
    color: #7CAEE8;
    background: #F3F8FA;
    margin: 0 .05rem .1rem 0;
    font-size: .12rem;
    line-height: .18rem;
}
.house-detail {
    color: #676C73;
    font-size: .13rem;
    margin-bottom:.09rem;
}
.price-num {
    color: #FA4600;
    font-size: .17rem;
    font-weight: 700;
}
.price-num-unit {
    color: #FA4600;
    font-size: .13rem;
}
.broker {
    font-size: .13rem;
    color: #676C73;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.broker-img-wrap {
    position: relative;
    display: inline-block;
    width: .15rem;
    height: .15rem;
    background: #ccc;
    border-radius: 50%;
    overflow: hidden;
    margin-right: .05rem;
    vertical-align: bottom;
}
.broker-img {
    width: 100%;
    height: 100%;
}
</style>
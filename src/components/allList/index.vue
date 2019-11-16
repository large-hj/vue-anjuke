<template>
  <div class="allList">
    <ul>
      <router-link  tag="li" :to="/houseDetail/+index+'/'+item.loupan_id" v-for="(item,index) in allList" :key="index">
        <div class="list_img">
          <img :src="item.default_image" alt />
        </div>
        <div class="list_txt">
          <h4>{{item.loupan_name}}</h4>
          <span>{{item.region_title}} {{item.subregion_title}} 建面 {{item.jianzhu_area}}</span>
          <p>{{item.unit_price}}{{item.new_price.unit}}</p>
          <div class="labels">
            <em :class="item.has_qiang?'saleHouseTag on-sale':'saleHouseTag pending-sale'">{{item.new_status_sale}}</em>
            <em class="defaultTag ui-tag_grey">{{item.new_price.property_desc}}</em>
            <em class="defaultTag ui-tag_grey">{{item.loupan_tags[1]}}</em>
          </div>
          <div class="g-overflow">
            <i>{{item.has_hui?'惠':'热'}}</i>
            <span class="adv-ctx">{{item.qiang_desc}}</span>
          </div>
        </div>
     </router-link>
    </ul>
  </div>
</template>

<script>
import { newHouseApi } from  "@api/index";
export default {
  name: "AllList",
  props:["index","loupan_id"],
  data() {
    return {
      allList: []
    };
  },
  created() {
    this.handleGetAllList(10);
  },
  methods: {
    async handleGetAllList(cid) {
      let data = await newHouseApi(cid);
      this.allList = data.result.rows;
    }
  }
};
</script>

<style lang="scss" scoped>
.allList,
ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  li {
    width: 100%;
    height: 1.46rem;
    padding: 0.15rem 0.15rem 0.15rem 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #f0f0f0;
    .list_img {
        width: 1rem;
        height: 0.9rem;
        margin-left: 0.15rem;
        img {
            width: 100%;
            height: 100%;
            border: 0;
            }
        }
    }
}
 
.allList li .list_txt {
  width: 2.16rem;
  height: 0.9rem;
  margin-left: 0.1rem;
  display: flex;
  flex-direction: column;
   h4 {
    color: #1f2326;
    font-weight: 700;
    font-size: 0.15rem;
    line-height: 0.17rem;
    }
    span {
    margin-top: 0.04rem;
    font-size: 0.13rem;
    }
     p {
    color: #fa4600;
    font-size: 0.13rem;
    font-weight: 700;
    }
    .labels {
    height: 0.2rem;
    width: 100%;
    display: flex;
        em {
            display: inline-block;
            font-size: 0.12rem;
            margin-right: 0.05rem;
        }
        .on-sale {
            background-color: #76ce84;
            color: #fff;
        }
        .pending-sale {
            background-color: #f8b49a;
            color: #fff;
        }
         .ui-tag_grey {
            background: #f3f5f7;
            color: #828890;
        }
    }
}
.allList li .list_txt .g-overflow {
  width: 100%;
  height: 0.17rem;
  display: flex;
  align-items: center;
  margin-top: 0.04rem;
  i {
    display: inline-block;
    font-size: 0.12rem;
    background: #f90;
    color: #fff;
    width: 0.15rem;
    height: 0.15rem;
    text-align: center;
    line-height: 0.15rem;
    }
    .adv-ctx {
    font-size: 0.12rem;
    color: #666;
    margin-left: 0.05rem;
    }
}


</style>
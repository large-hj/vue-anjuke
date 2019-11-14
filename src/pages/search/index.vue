<template>
<<<<<<< HEAD
  <div class="search_container page">
    <Header icon/>
    <div class="search_movie_body">
      <div class="search_movie_input">
        <input type="text" />
      </div>
      <h2>电影/电视剧/综艺</h2>
      <div class="movie_item">
        <div class="movie_item_pic">
          <img src />
        </div>
        <div class="movie_item_info">
          <h2>无名之辈</h2>
          <p>
            <span class="person">67554</span>人想看
          </p>
          <p>
            主演：
            <span>Alley 吴彦祖 胡歌</span>
          </p>
          <p>
            <span>2019-05-20上映</span>
          </p>
        </div>
        <div class="movie_item_btn person">想看</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {};
</script>


<style>
/*movie_body*/
.search_movie_body {
  height: 100%;
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
}

.search_movie_body .search_movie_input {
  padding: 0.16rem 0.2rem;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_movie_body .search_movie_input > input {
  border: none;
  font-size: 0.3rem;
  color: #333;
  padding: 0.1rem 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
.search_movie_body > h2 {
  font-size: 0.3rem;
  color: #999;
  padding: 0.18rem 0;
  border-bottom: 1px solid #e6e6e6;
}
.search_movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
.search_movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
.search_movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
.search_movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
.search_movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.search_movie_body .movie_item .movie_item_info p .person {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}

.search_movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
.search_movie_body .movie_item > .person {
  background-color: #faaf00;
=======
  <div class="box">
    <div class="searchhead">
        <input type="text" class="search" placeholder="请输入国家或城市" v-model="value">
        <a href="" class="cancle">取消</a>
    </div>
    <div class="list">
      <div class="img">
        <img src="https://pages.anjukestatic.com/usersite/touch/img/haiwai/brand.png" />
      </div>
      <div class="content">
        <span class="strong">顺福轩</span>
        <span>
         的地方似懂非懂从v
          <i>多岁的</i>
        </span>
        <span class="ys">
          <i>好好</i>
        </span>
        <div class="last">
          <span class="yue">
            约￥
            <i class="money">456</i>万元
            <i>订单的</i> |
            <i>120m</i>
          </span>
          <a class="adv">订单</a>
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
      list:[]
    }
  },
  watch:{
    async value(newVal){
      let data=await searchApi( this.$store)
      console.log(data)
    }
  }
};
</script>
<style scoped lang="scss">
.searchhead {
  position: relative;
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
    border-radius: 3px;
    border: 1px solid #ebebeb;
    font-size: 0.14rem;
    background: #fff;
    color: #999;
    outline: 0;
    padding: 0 0 0 10px;
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
    box-sizing: border-box;
    margin-right: 0.05rem;
  }
}
/***************查询出来的列表************** */
.list {
  width: 100%;
  height: 1.33rem;
  padding: 0.15rem;
  display: flex;
  border-bottom: 1px solid #ccc;
  justify-content: flex-start;
  align-items: center;
}
.list .img {
  display: inline-block;
  width: 40%;
  height: 0.81rem;
}
.list .img img {
  width: 100%;
  height: 100%;
}
.content {
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100%;
  padding-left: 0.1rem;
}
.content .strong {
  font-size: 0.14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content p {
  font-size: 0.12rem;
}
.content span {
  font-size: 0.1rem;
}
.content .last {
  display: flex;
  flex-direction: column;
}
.content .last span {
  padding-right: 0.05rem;
  color: cyan;
}
.content .last span i{
   color: black;
  font-size: 0.12rem;
}
.content .last a {
  color: black;
  padding-left: 0.1rem;
  font-size: 0.12rem;
}
.content .ys {
  display: inline-block;
  height: 0.17rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content .ys i {
  margin-top: 0.051rem;
  display: inline-block;
  background: #f3f8fa;
  color: #7dafe8;
  margin-left: 0.02rem;
}
.content .last .yue {
  color: #e54b00;
}
.content .last .money {
  color: red;
}
.content .last .adv {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.1rem;
>>>>>>> guorong
}
</style>
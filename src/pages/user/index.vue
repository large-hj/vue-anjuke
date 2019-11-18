<template>
  <div class="box">
    <div class="top">
      <div class="info">
        <div class="userPic" @click="handle()">
          <img :src="urlPic" />
        </div>
        <router-link tag="div" to="/lore" class="lore">
          {{name}}
          <span v-if="flag">登录/注册</span>
        </router-link>
      </div>
    </div>
    <div class="contain">
      <span class="iconfont">&#xe602; 我的点评</span>
      <span class="iconfont">&#xe610; 我的房源</span>
      <span class="iconfont">&#xe61b; 我的卡卷</span>
      <span class="iconfont">&#xe696; 我的订单</span>
      <span class="iconfont">&#xe696; 我的优惠</span>
      <span class="iconfont" @click="showPopup">&#xe696; 修改密码</span>
    </div>
    <van-popup
      class="popup"
      v-model="show"
      closeable
      round
      close-icon-position="top-left"
      position="top"
      :style="{height: '64%' }"
    >
      <div class="box">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">修改密码</h4>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="old-password">原密码:</label>
              <input type="password" class="form-control" id="old-password" placeholder="请输入原密码" v-model="v1" />
            </div>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="new-password">新密码:</label>
              <input type="password" class="form-control" id="new-password" placeholder="请输入新密码" v-model="v2"/>
            </div>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="ok-password">确认密码:</label>
              <input type="password" class="form-control" id="ok-password" placeholder="请输确认密码" v-model="v3" />
            </div>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn Updatepassword" @click="Updatepassword()">修改</button>
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import Vue from "vue";
import { Popup } from "vant";
import { Cell } from "vant";

Vue.use(Popup);
Vue.use(Cell);
export default {
  name: "user",
  data() {
    return {
      urlPic: "",
      name: "",
      _id: "",
      flag: false,
      show: false,
      v1:"",
      v2:"",
      v3:"",
    };
  },
  created() {
     this.urlPic=Cookies.get("urlPic");
       this.name=Cookies.get("name");
       this._id=Cookies.get("id")
    if (this._id == null) {
      this.flag = true;
    }
  },

  methods: {
    handle() {
      if (this._id == null) {
      }
    },
    showPopup() {
      this.show = true;
    },
    Updatepassword(){
      console.log(this.v1,this.v2,this.v3)
     var  id=Cookies.get("id")
      console.log(id)
            this.$reqs.post("/users.js/password", {
            id,
            oldpassword: this.val1,
            newpassword: this.val2
        })
        // .then(function(data) {
        //   //成功
        //   console.log(data);
       
          
        // })


    }
  }
};
</script>


<style scoped>
/******修改密码*********/
.modal-footer{
    display: flex;

}
.box{
    font-size: 0.12rem;
}
.modal-title{
    height: 0.3rem;
    text-align: center;
    line-height: 0.3rem;
    font-size: 0.2rem;

}
.form-group{
    height: 0.5rem;
   margin-left: 0.2rem;
    line-height: 0.5rem;
    font-size: 0.16rem;
}
.form-control{
    width: 1.5rem;
    height: 0.3rem;
    border:1px solid #ccc;
    border-radius: 0.05rem;
}

.btn{
    text-align: center;
    width: 2rem;
    height: 0.3rem;
    border-radius: 0.05rem;
}
/***************** */
.box .top {
  width: 100%;
  height: 1.25rem;
  background: #62ab00;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box .top .info {
  width: 1rem;
  height: 1rem;
}
.userPic {
  width: 100%;
  height: 80%;
  background: url("http://pages.anjukestatic.com/usersite/touch/img/user/photo_default.png")
    no-repeat center center;
  border-radius: 50% 50%;
  overflow: hidden;
}
.userPic img {
  width: 100%;
  height: 100%;
}
.lore {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.14rem;
  color: #fff;
  border: 1px solid #fff;
  margin-top: 0.1rem;
}
.contain {
  background: #ccc;
  height: 5rem;
}
.contain span {
  padding-left: 0.1rem;
  margin-top: 0.1rem;
  display: block;
  background: #fff;
  margin-bottom: 0.1rem;
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.14rem;
}
</style>
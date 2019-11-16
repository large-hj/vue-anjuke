<template>
     <div class="new_module">
        <router-link 
            v-for="(item,index) in list" :key="index"
            :to="item.path" 
            tag="div" 
            class="icon-item "
            >
            <a href="#"><i ></i></a>
            <span>{{item.text}}</span>
        </router-link>
    </div>

</template>

<script>
export default {
    name:"Menu",
    data(){
        return{
            list:[
                {
                   text:"全部楼盘",
                   path:"/allHouse"
                },
                {
                   text:"在售楼盘",
                   path:"/nowSale"
                },
                {
                   text:"近期开盘",
                   path:"/allHouse"
                },
                {
                   text:"低总价",
                   path:"/allHouse"
                },
                {
                   text:"免费看房",
                   path:"/allHouse"
                },
            ]
        }
    }


}
</script>

<style lang="scss" scoped>
    .new_module{
    width:100%;
    height:.92rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:0 .1rem;
}
.new_module .icon-item{
    height: .83rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:10px 0 0;
  a{
    width:.46rem;
    height:.46rem;
    overflow: hidden;
    display: block;
     i{
    display: block;
    width:.46rem;
    height:.46rem;
    background:url(https://pages.anjukestatic.com/kfstouch/xinfang-mobile/img/fuwu/loupan/home_head_icons.png) no-repeat -184px 0;
    background-size: 276px 92px; 
    overflow: hidden;
    margin-left: calc(50% - 23px);
    }
  }
    span{
    font-size: .12rem;
    display: block;
    color: #555;
    line-height: .12rem;
    padding-top:.05rem;
    }
}
.new_module {
     :nth-child(2) a i{
    background-position: -184px -46px;
    }
     :nth-child(3)   a i{
    background-position: -138px 0;
    }
    :nth-child(4)   a i{
    background-position: 0 0;
    }
    :nth-child(5)   a{
    background-position: -230px -46px;
    }
}

</style>
<template>
    <div class="short_box">
        <li v-for="(item,index) in lists" :key="index"><p>{{item}}</p></li>
    </div>
</template>

<script>
export default {
    name:"ShortBox",
    data(){
        return{
            lists:["在售","本月开盘","即将开盘","热门楼盘"]
        }
    }
}
</script>

<style lang="scss">
    .short_box{
        width:100%;
        height:.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
        position: sticky;
        top:.44rem;
        background: #fff;
    }
    .short_box  li{
        width:.66rem;
        padding: 5px;
        display: flex;
        background-color: #f8f8f8;
        line-height: 20px;
        color: #676c73;
        height: 30px;
        font-size: .12rem;
       justify-content: center;
    }
    .short_box  li p{
        font-size: .12rem;
    }
</style>
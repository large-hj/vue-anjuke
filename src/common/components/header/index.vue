<template>
      <header>
        <div class="left">
            <div>
            <!-- <img src="../img/1.jpg" alt /> -->
            </div>
           
            <router-link tag="div" to="/city" class="movie_menu_city">
                <p>北京</p>
                 <i class="iconfont">&#xe627;</i>
            </router-link>
        </div>
        <div class="right">
            <span>新房</span>
            <span>二手房</span>
            <span>租房</span>
            <span>我</span>
        </div>
    </header>
</template>


<script>
export default {
   name:"Header",
   props:{
       title:{
           type:String,
           default:"猫眼电影"
       },
       icon:{
           type:Boolean
       }
   },
   methods:{
       handleBack(){
           this.$router.back();
       }
   }

}
</script>

<style>
     header {
            width: 100%;
            height: .4rem;
            background: #ccc;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.1rem;
        }

        header .left {
            width: 30%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }

        header .left div {
            width: 70%;
            height: 50%;

        }

        header .left div img {
            width: 100%;
            height: 100%;
        }

        header .left p {
            font-size: 0.13rem;
        }

        header .right {
            width: 50%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        header .right span {
            font-size: 0.16rem;
            font-family: arial;
            color: #333;
        }
</style>
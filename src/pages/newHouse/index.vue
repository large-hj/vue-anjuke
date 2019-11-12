<template>
    <div class="main">
       <Header/>
       <Nav/>
       <Menu/>
       <Activities/>
       <SelectBar/>
       <HouseList/>
    </div>
</template>

<script>
import Nav from '@components/nav'
import Menu from '@components/menu'
import Activities from "@components/activities";
import HouseList from "@components/houseList";
export default {
    name:"NewHouse",
    components:{
        Nav,
        Menu,
        Activities,
        HouseList
    }
}
</script>

<style>
    .main{
        height:100%;
        overflow: auto;
    }
</style>
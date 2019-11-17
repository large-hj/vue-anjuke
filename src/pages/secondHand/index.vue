<template>
    <div class="secondHand">
         <Header/>
          <Nav/>
          <SelectList/>
          <SecondList/>
    </div>
</template>

<script>
import Nav from '@components/nav'
import SelectList from "@components/selectList"
import SecondList from "@components/SecondList"
    export default {
        name:"SecondHand",
        components:{
            Nav,
            SelectList,
            SecondList
        }
    }
</script>

<style lang="scss" scoped>
    .secondHand{
        width:100%;
        height:100%;
    }
</style>
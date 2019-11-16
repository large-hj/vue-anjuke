<template>
  <div class="all_list">
     <ChildHeader/>
     <SelectBar/>
     <ShortBox/>
     <AllList/>
  </div>
</template>

<script>
import AllList from '@components/allList'
export default {
  name: "AllHouse",
  components:{
    AllList,
  }
};
</script>

<style lang="scss" scoped>
  .all_list{
    width:100%;
    height:100%;
    overflow: auto;
  }
</style>
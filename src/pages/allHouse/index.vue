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
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    overflow: auto;
  }
</style>
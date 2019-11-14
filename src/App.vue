<template>
  <div id="app">
    <Neighborhood/>
    <router-view></router-view>
  </div>
</template>
<script>
import Neighborhood from "./pages/neighborhood"
export default {
  name:"App",
 components:{
   Neighborhood
 },
  data(){
    return{
        
    }
  },


export default {
  name:"App",
  components:{
    
  }
}

</script>
<style lang="scss">
.page{
  height: 100%;
  position: absolute;
  left:0;
  top:0;
  bottom:0;
  right: 0;
  padding-bottom: 1rem;
}
</style>

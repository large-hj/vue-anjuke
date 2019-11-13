<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import { Search } from 'vant';

Vue.use(Search);
import NewHouse from './pages/newHouse'
export default {
  components:{
    NewHouse
  }
}
</script>

<style>
  #app{
    height:100%;
    overflow:auto;
  }
</style>

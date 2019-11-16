<template>
    <div class="wrapper" ref="wrapper">
      <slot></slot>
    </div>
 
</template>


<script>
import BScroll from "better-scroll";
export default {
  name: "Alley-scroll",
  mounted() {
   new BScroll(this.$refs.wrapper)

  }
};
</script>


<style>
.wrapper{
  height: 100%;
  /* overflow: hidden; */
}
/* .scroll_loading {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.4rem;
} */
</style>
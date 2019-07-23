<template>
  <!-- 首页 -->
  <div id="main">
    <head-nav></head-nav>
    Hello Word!
  </div>
</template>

<script>
  import headNav from './Header/Header';
  export default {
    components:{
        headNav
    },
    name: "Index"
  }
</script>

<style scoped>
   *{
     margin: 0;
     padding: 0;
   }
</style>

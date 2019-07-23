<template>
  <!-- 首页 -->
  <div id="main">
    <head-nav></head-nav>
    <aside-content></aside-content>
    <foot-nav></foot-nav>
  </div>
</template>

<script>
  import headNav from './Header/Header';
  import asideContent from './Aside/Aside';
  import footNav from './Footer/Footer';
  export default {
    components:{
        headNav,
        asideContent,
        footNav,
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

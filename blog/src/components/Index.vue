<template>
  <!-- 首页 -->
  <div id="main" class="com_style">
    <menu-top></menu-top>
    <div class="line"></div>
    <div class="main_box">
      <conmand></conmand>
      <right-aside></right-aside>
    </div>
  </div>

</template>

<script>
  import rightAside from './RightAside/Aside';
  import conmand from './ConmandArticle/Conmand';
  import menuTop from './Menu/Menu';

  export default {
    components: {
      rightAside,
      conmand,
      menuTop
    },
    name: "Index"
  }
</script>

<style scoped>
  #main {

  }

  .main_box {
    display: flex;
    flex-wrap: wrap;
  }
</style>

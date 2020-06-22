<template>
  <!-- 文章列表推荐 -->
  <div class="left">
    <article-list :title="'热门文章'"></article-list>
    <article-list :title="'文章列表'"></article-list>
  </div>
</template>

<script>
  import articleList from '../Template/article_list'
    export default {
    components:{
      articleList
    },
        name: "Conmand"
    }
</script>

<style scoped>
  .left {
    margin: 0 auto;
    width: 60%;
    min-width: 320px;
  }
</style>

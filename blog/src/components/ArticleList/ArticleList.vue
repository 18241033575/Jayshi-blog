<template>
  <!-- 文章列表 -->
  <div class="com_style article_list">
    <article-list :sign="sign"></article-list>
  </div>
</template>

<script>
  import articleList from '../Template/article_list'
    export default {
      components:{
        articleList
      },
      name: "ArticleList",
      data() {
        return {
          sign: 'CSS3'
        }
      },
      created() {
        this.sign = this.$route.query.part;
      },
      watch: {
        $route: {
          handler() {
            this.sign = this.$route.query.part;
          },
          deep: true
        }
      }
    }
</script>

<style scoped>

</style>

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
        let timer = setTimeout(() => {
          this.sign = 'CSS3';
        }, 5000)
      }
    }
</script>

<style scoped>

</style>

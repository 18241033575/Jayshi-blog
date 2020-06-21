<template>
  <!-- 文章详情 -->
  <div class="com_style article_det">
    <h2 class="title">
      {{ article.title }}
    </h2>
    <div class="content" v-html="article.content">

    </div>
  </div>
</template>

<script>
  import store from '../../../vuex/store'
  import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
  export default {
    name: "ArticleDet",
    data() {
      return {
        article: {}
      }
    },
    methods: {
      ...mapActions(['addAction','reduceAction']),
      ...mapMutations(['add', 'reduce'])
    },
    computed: mapGetters(['count', 'loading', 'loadingState']),
    store,
    created() {
      let title = this.$route.params.title;
      this.addAction();
      this.$axios.get('/api/articles?title=' + title)
        .then(res => {
          if (res.data.code === 200) {
            this.article = res.data.data[0]
          }
          this.reduceAction();
        })
    }
  }
</script>

<style scoped>
.title {
  margin-bottom: 30px;
  line-height: 48px;
  text-align: center;
}
.content {
  /*text-indent: 2em;*/
}
</style>

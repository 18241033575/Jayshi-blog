<template>
  <div class="article_part">
    <div class="part_title">
      <i class="el-icon-star-on"></i>
      <h3>{{ this.title || '文章列表' }}</h3>
    </div>
    <div class="articles" v-if="articleList.length">
      <div class="cell" v-for="(item, index) in articleList" :key="index" @click="artDet(item.title)">
        <div class="cell_img">
          <img src="/static/images/logo.png" alt="">
        </div>
        <div class="cell_msg">
          <h4 class="ellipsis">{{ item.title }}</h4>
          <p class="desc">{{ item.intro }}</p>
          <p class="tips"><span @click.stop="tags(tag)" v-for="tag in item.tags.split(',')">{{ tag }}</span></p>
        </div>
      </div>
    </div>
    <div class="empty" v-if="!articleList.length">
      暂无数据
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
  import store from '../../../vuex/store'

  export default {
    name: "article_list",
    props: {
      sign: String,
      title: String,
      hot: Boolean
    },
    data() {
      return {
        articleList: [],
        tag: this.sign
      }
    },
    methods: {
      artDet(title) {
        this.$router.push({name: 'ArticleDet', params: {title}});
      },
      tags(tag) {
        if (tag !== this.tag) {
          this.$router.push({path: '/articles?part=' + tag});
        }
      },
      getData() {
        if (this.hot) {
          this.addAction();
          this.$axios.get('/api/articles?hot=' + this.hot)
            .then(res => {
              if (res.data.code === 200) {
                this.articleList = res.data.data
              }
              this.reduceAction()
            })
        } else if (this.tag) {
          this.addAction();
          this.$axios.get('/api/articles?tag=' + this.tag)
            .then(res => {
              if (res.data.code === 200) {
                this.articleList = res.data.data
              }
              this.reduceAction()
            })
        } else {
          this.addAction();
          this.$axios.get('/api/articles')
            .then(res => {
              if (res.data.code === 200) {
                this.articleList = res.data.data
              }
              this.reduceAction()
            })
        }

      },
      ...mapActions(['addAction', 'reduceAction']),
      ...mapMutations(['add', 'reduce'])
    },
    store,
    created() {
      this.getData()
    },
    watch: {
      $route: {
        handler(newParam, oldParam) {
          this.tag = newParam.query.part;
          this.getData()
        },
        deep: true
      }
    }
  }
</script>

<style scoped>
  .part_title {
    margin-top: 10px;
  }

  .part_title h3 {
    display: inline-block;
    padding: 0 0 10px 5px;
  }

  .articles {
    box-shadow: 2px 2px 5px #999;
    border-radius: 5px;
    overflow: hidden;
  }

  .cell {
    display: flex;
    align-items: center;
    padding: 10px 6px;
    border-bottom: 1px solid #EAEAEA;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #ffffff;
    cursor: pointer;
  }

  .cell:hover {
    background-color: #f9f9f9;
  }

  .cell .cell_img {
    margin: 0 20px;
    width: 100px;
    min-width: 100px;
    height: 100px;
    overflow: hidden;
  }

  .cell .cell_img img {
    width: 100%;
    height: 100%;
    transition: .5s;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    border-radius: 5px;
  }

  .cell .cell_img img:hover {
    transform: scale(1.2);
  }

  .cell_msg {
    flex-grow: 1;
  }

  .cell_msg h4 {
    margin: 9px 0;
  }

  .cell_msg p {
    margin: 5px 0;
  }

  .cell_msg .desc {
    max-height: 40px;
    font-size: 14px;
    word-wrap: break-word;
    overflow: hidden;
  }

  .tips span {
    display: inline-block;
    margin: 10px 10px 0 0;
    padding: 5px 9px;
    border: 1px solid #EAEAEA;
    text-align: center;
    font-size: 12px;
    border-radius: 10px;
  }

  .tips span:hover {
    border: 1px solid rgb(87, 157, 221);
  }

  .empty {
    line-height: 48px;
  }
</style>

<template>
  <!-- 首页 -->
  <div v-loading="loadingState">
    <div id="main" class="com_style">
      <menu-top></menu-top>
      <div class="line"></div>
      <div class="main_box">
        <conmand></conmand>
        <right-aside></right-aside>
      </div>
    </div>
  </div>

</template>

<script>
  import store from '../../vuex/store'
  import rightAside from './RightAside/Aside';
  import conmand from './ConmandArticle/Conmand';
  import menuTop from './Menu/Menu';
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'

  export default {
    components: {
      rightAside,
      conmand,
      menuTop
    },
    name: "Index",
    data() {
      return {
        // loading: true
      }
    },
    methods: {
      ...mapActions(['addAction', 'reduceAction']),
      ...mapMutations(['add', 'reduce'])
    },
    store,
    computed: mapGetters(['count', 'loading', 'loadingState'])
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

<template>
  <div id="app"  v-loading="loadingState">
    <Header-top></Header-top>
    <Footer-bottom></Footer-bottom>
    <router-view/>
  </div>
</template>

<script>
  import HeaderTop from './components/Header/Header';
  import FooterBottom from './components/Footer/Footer'
  import store from '../vuex/store'
  import {mapState, mapActions, mapMutations, mapGetters} from 'vuex'
export default {
    components:{
      HeaderTop,
      FooterBottom
    },
  name: 'App',
  methods: {
    ...mapActions(['addAction', 'reduceAction']),
    ...mapMutations(['add', 'reduce'])
  },
  store,
  computed: mapGetters(['count', 'loading', 'loadingState']),
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  #app{
    position: relative;
    left: 0;
    top: 0;
    min-height: 100vh;
    overflow: hidden;
    background: radial-gradient(rgba(196,180,26,.6),rgba(160,165,200,.4));
  }
  a{
    text-decoration: none;
    color: #666666;
  }
  ul{
    list-style: none;
  }
  img{
    vertical-align: middle;
  }
  .ellipsis{
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .border_ra5{
    border-radius: 5px;
    overflow: hidden;
  }
  .com_style{
    margin: 80px auto 120px;
    width: 100%;
    max-width: 1180px;
  }
  .to_other{
    text-align: right;
    font-size: 14px;
    color: #999999;
  }
  /* 日历样式 */
  .el-calendar-table .el-calendar-day {
    height: auto;
  }
</style>

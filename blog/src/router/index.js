import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HeaderTop from '@/components/Header/Header'
import FooterBottom from '@/components/Footer/Footer'

Vue.use(HeaderTop);
Vue.use(FooterBottom);

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ArticleList from '@/components/ArticleList/ArticleList'
import AboutMe from '@/components/AboutMe/AboutMe'
import Test from '@/components/Test/Test'
import Login from '@/components/Common/Login'
import Register from '@/components/Common/Register'


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
    },
    {
      path: '/about_me',
      name: 'AboutMe',
      component: AboutMe
    },
    {
      path: '/articles',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})

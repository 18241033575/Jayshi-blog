// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import Axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import md5 from 'js-md5';

Vue.prototype.$axios = Axios;
Vue.prototype.$md5 = md5;

Vue.use(elementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

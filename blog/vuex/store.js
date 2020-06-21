import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1,
  loading: 0,
  loadingState: true,
  loginState: false,
  loginData: {}
}
const mutations = {
  add(state) {
    state.count++;
    state.loading++;
  },
  reduce(state) {
    state.count--;
    state.loading--
  }
}
/*const moduleA = {
  state, mutations, getters, actions
}

// 同步处理变量
*/
const getters = {
  count: function (state) {
    return state.count += 100
  },

  loadingState: function (state) {
    console.log(state.loadingState = state.loading > 0);
    return state.loadingState = state.loading > 0 ? true : false;
  },

  loading: function (state) {
    return state.loading = state.loading < 0 ? 0 : state.loading
  }
}

// 异步处理变量
const actions = {
  addAction(context) {
    context.commit('add')
  },
  reduceAction(context) {

    context.commit('reduce')
  }
}

export default new Vuex.Store({
  state, mutations, getters, actions
})

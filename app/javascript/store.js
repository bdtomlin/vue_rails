import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null,
    drawer: true
  },
  mutations: {
    addToken(state, token) {
      state.token = token
    },
    removeToken(state, token) {
      state.token = null
    },
    drawer(state, val) {
      state.drawer = val
    }
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: null
  },
  mutations: {
    addToken(state, token) {
      state.token = token
    },
    removeToken(state, token) {
      state.token = null
    }
  }
})

export default store

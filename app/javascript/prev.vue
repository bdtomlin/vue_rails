<template>
  <div id="app" class="app">
    <template v-if="loggedIn">
      <router-link to="/">Home</router-link>
      <router-link to="/page1">Page1</router-link>
      <router-link to="/page2">Page2</router-link>
      <a @click="logout" href="#">logout</a>
      <router-view></router-view>
    </template>
    <template v-else>
      <Login></Login>
    </template>
  </div>
</template>

<script>
import Login from './login'

export default {
  data: function () {
    return {
      message: 'some message'
    }
  },
  methods: {
    logout: function(event) {
      event.preventDefault()
      localStorage.removeItem('token')
      this.$store.commit('removeToken')
    }
  },
  computed: {
    loggedIn: function() {
      return this.$store.state.token !== null
    }
  },
  components: { Login },
  beforeCreate: function(){
    this.$store.commit('addToken', localStorage.getItem('token'))
  }
}
</script>

<style scoped>
.router-link-active {
  background: yellow;
}
.app {
  background: #eee;
}
</style>

<!-- <template>
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
</template> -->

<template>
  <v-app>
    <template v-if="loggedIn">
      <cv-main-nav></cv-main-nav>
      <cv-main-toolbar></cv-main-toolbar>
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </template>
    <template v-else>
      <login></login>
    </template>
  </v-app>
</template>

<script>
  import CvMainNav from './components/CvMainNav'
  import CvMainToolbar from './components/CvMainToolbar'
  import Login from './login'

  export default {
    components: {CvMainNav, CvMainToolbar, Login},
    data () {
      return { }
    },
    computed: {
      loggedIn: function() {
        return this.$store.state.token !== null
      }
    },
    beforeCreate: function(){
      this.$store.commit('addToken', localStorage.getItem('token'))
    }
  }
</script>

<style lang="css">
</style>

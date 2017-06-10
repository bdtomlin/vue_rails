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

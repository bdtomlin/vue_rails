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
  <v-app id="example-2">
    <cv-main-nav></cv-main-nav>
    <v-toolbar fixed class="indigo darken-4" light>
      <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <div class="title">Click on sidebar to re-open.</div>
        <!--v-router-->
      </v-container>
    </main>
  </v-app>
</template>

<script>
  import CvMainNav from './components/CvMainNav'

  export default {
    components: {CvMainNav},
    data () {
      return {
        drawer: true,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ],
        mini: false,
        right: null
      }
    }
  }
</script>

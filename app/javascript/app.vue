<template>
  <v-app id="app">
    <template v-if="loggedIn">
      <v-navigation-drawer persistent light v-model="drawer">
        <v-list class="pa-0">
          <v-list-item>
            <v-list-tile avatar tag="div">
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" />
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-item>
        </v-list>
        <v-list class="pt-0" dense>
          <v-divider></v-divider>
          <v-list-item v-for="item in items" :key="item">
            <v-list-tile>
              <v-list-tile-action>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar fixed class="indigo darken-4">
        <v-toolbar-side-icon light @click.native.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Toolbar</v-toolbar-title>
      </v-toolbar>
      <main>
        <v-container fluid>
          <div class="title">Click on sidebar to re-open.</div>
          <!--v-router-->
        </v-container>
      </main>
    </template>
    <template v-else>
      <Login></Login>
    </template>

  </v-app>
</template>

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

<script>
import Login from './login'

export default {
  data: function () {
    return {
      mini: '',
      items: [],
      drawer: true
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

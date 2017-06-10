<template lang="html">
<v-navigation-drawer
  persistent
  dark
  :mini-variant.sync="mini"
  enable-resize-watcher
  v-model="drawer">
  <v-list class="logo-list">
    <v-list-item>
      <v-list-tile class="logo" avatar tag="div">
        <template v-if="mini">
          <img class="icon-logo" v-bind:src="clientvineLogoIcon" alt="logo">
        </template>
        <template v-else>
          <img class="main-logo" v-bind:src="clientvineLogo" alt="logo">
        </template>
        <v-list-tile-content></v-list-tile-content>
        <v-list-tile-action>
          <v-btn light icon @click.native.stop="mini = !mini">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list-item>
  </v-list>
  <v-list class="pt-0" dense>
    <v-divider></v-divider>
    <v-list-item v-for="item in items" :key="item">
      <v-list-tile :href="item.href" :router="true">
        <v-list-tile-action>
          <v-icon light>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
    <v-list-item @click="logout">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon light>question_answer</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Logout</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
  </v-list>
</v-navigation-drawer>
</template>

<script>
import clientvineLogo from '../images/clientvine-logo.svg'
import clientvineLogoIcon from '../images/clientvine-logo-icon.svg'
export default {
  data () {
    return {
      items: [
        { title: 'Home', icon: 'dashboard', href: '/' },
        { title: 'About', icon: 'question_answer', href: '/page1' },
        { title: 'About', icon: 'question_answer', href: '/page2' }
      ],
      mini: false,
      clientvineLogo,
      clientvineLogoIcon
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
    drawer: {
      get () {
        return this.$store.state.drawer
      },
      set (val) {
        this.$store.commit('drawer', val)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.logo-list {
  padding: 0;
}
.logo {
  padding-left: 0;
}
.main-logo {
  width: 200px;
}
.icon-logo {
  width: 80px;
  padding: 0 15px;
}
.navigation-drawer>.list .list__tile--active>:first-child .icon {
  color: #53b596;
}
.router-link-exact-active {
  background: #383838;
}
</style>

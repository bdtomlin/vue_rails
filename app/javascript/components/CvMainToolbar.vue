<template lang="html">
  <v-toolbar fixed class="clientvine" light>
    <v-toolbar-side-icon light @click.native.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title>Toolbar</v-toolbar-title>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      toggleDrawer() {
        this.$store.commit('drawer', !this.$store.state.drawer)
      }
    }
  }
</script>

<style lang="css" scoped>
.clientvine {
  background: #53b596;
}
</style>

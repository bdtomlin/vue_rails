<!-- <template lang="html">
  <div>
    <form>
      <input v-model="email" type="text" placeholder="Email">
      <input v-model="password" type="password" placeholder="Password">
      <button @click="submit">Login</button>
    </form>
    <pre>
    {{$data}}
    </pre>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      email: 'bdtomlin@gmail.com',
      password: 'sdfsdf'
    }
  },
  methods: {
    submit: function(event){
      event.preventDefault()
      axios.post('/user_token', {
        auth: {
          email: this.email,
          password: this.password
        }
      })
      .then((response) => {
        localStorage.setItem('token', response.data.jwt)
        this.$store.commit('addToken', response.data.jwt)
      })
    }
  },
  computed: {
    token () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="css">
</style> -->
<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-row>
          <v-card-title>Please Log In...</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-text-field v-model="email" v-on:keyup.13="submit" label="Email" required></v-text-field>
            <v-text-field v-model="password" v-on:keyup.13="submit" label="Password" type="password" required></v-text-field>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat @click.native="submit">Submit</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import axios from 'axios'

export default {
  data: function(){
    return {
      dialog: true,
      email: 'bdtomlin@gmail.com',
      password: 'sdfsdf'
    }
  },
  methods: {
    submit: function(event){
      event.preventDefault()
      axios.post('/user_token', {
        auth: {
          email: this.email,
          password: this.password
        }
      })
      .then((response) => {
        localStorage.setItem('token', response.data.jwt)
        this.$store.commit('addToken', response.data.jwt)
      })
    }
  },
  computed: {
    token () {
      return this.$store.state.count
    }
  }
}
</script>

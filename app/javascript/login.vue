<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-row>
          <v-card-title>Please Log In...</v-card-title>
        </v-card-row>
        <v-card-row v-if="invalidLogin">
          <v-alert error v-model="invalidLogin">
            Invalid Email/Password Combination
          </v-alert>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-text-field v-model="email" @keyup.native.enter="submit" label="Email" required></v-text-field>
            <v-text-field v-model="password" @keyup.native.enter="submit" label="Password" type="password" required></v-text-field>
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
      password: 'sdfsdf',
      invalidLogin: false
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
      .catch((error) =>  {
        this.invalidLogin = true
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

<style scoped>
.dialog__content {
  background: black;
}
</style>

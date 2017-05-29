<template lang="html">
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
</style>

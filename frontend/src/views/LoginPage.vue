<template>
  <form @submit.prevent="doLogin" class="login-page">
    <h1>Login</h1>
    <label class="flex justify-between">
      Username
      <input type="text" v-model="loginCred.username" placeholder="User name">
    </label>
    <label class="flex justify-between">
      Password
      <input type="password" v-model="loginCred.password" placeholder="Password">
    </label>
    <button v-if="!isLoading" class="btn-login">Log In</button>
    <Loader />
  </form>
</template>

<script>
import Loader from '../cmps/Loader.vue'
export default {
  name: 'LoginPage',

  data() {
    return {
      loginCred: { username: '', password: '' },
    }
  },

  methods: {
    async doLogin() {
      if (!this.loginCred.username || !this.loginCred.password) {
        alert('Some credentials are missing')
        return
      }

      try {
        await this.$store.dispatch({ type: 'login', userCred: this.loginCred })
        await this.$store.dispatch({ type: 'getSwitchesForHome' })
        this.$router.push('/')
      } catch (err) {
        console.log(err.message)
        alert('Wrong username or password')
      }
    },
  },

  computed: {
    isLoading() {
      return this.$store.getters.isLoading
    }
  },

  components: {
    Loader
  }
}
</script>
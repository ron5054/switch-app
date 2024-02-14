<template>
  <div class="login-view">
    <section class="login-form">
      <form @submit.prevent="doLogin">
        <span>Username</span>
        <input type="text" v-model="loginCred.username" placeholder="User name">
        <span>Password</span>
        <input type="password" v-model="loginCred.password" placeholder="Password">
        <button class="login-btn">Log In</button>
      </form>
    </section>
  </div>
</template>

<script>

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
  }
}
</script>
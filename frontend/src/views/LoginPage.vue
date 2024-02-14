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
  name: 'login-signup',
  data() {
    return {
      loginCred: { username: '', password: '' },
    }
  },
  methods: {
    async doLogin() {
      if (!this.loginCred.username || !this.loginCred.password) return showErrorMsg('Please enter username/password')

      try {
        await this.$store.dispatch({ type: "login", userCred: this.loginCred })
        this.$router.push('/')
      } catch (err) {
        console.log(err.message)
        showErrorMsg('Wrong username or password')
      }
    },
    doLogout() {
      this.$store.dispatch({ type: 'logout' })
    },
  }
}
</script>
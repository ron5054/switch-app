<template>
    <section class="main-layout">
        <AppHeader :user="user" @logout="logout"/>
        <RouterView />
    </section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'

export default {
    name: 'App',

    async created() {
        try {
            // const userCred = { username: 'dummy', password: '123' }
            // const user = await this.$store.dispatch({ type: 'login', userCred })

            // if (!user) {
            //     this.goToLogin()
            //     return
            // }

            if (!this.user) {
                this.goToLogin()
                return
            }

            await this.$store.dispatch({ type: 'getSwitchesForHome' })
        } catch (err) {
            console.log('Something went wrong at app creation')
        }
    },

    methods: {
        async logout() {
            try {
                await this.$store.dispatch({ type: 'logout' })
                this.goToLogin()
            } catch (err) {
                console.log(err)
            }
        },
        goToLogin() {
            this.$router.push('/login')
        }
    },

    computed: {
        user() {
            return this.$store.getters.loggedinUser()
        }
    },

    components: {
        AppHeader
    }
}
</script>
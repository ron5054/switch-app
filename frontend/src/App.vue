<template>
    <section class="main-layout">
        <AppHeader :user="user" @logout="logout" />
        <RouterView />
        <UserMsg />
    </section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'
import UserMsg from './cmps/UserMsg.vue'

export default {
    name: 'App',

    async created() {
        try {
            if (!this.user) {
                this.goToLogin()
                return
            }

            await this.$store.dispatch({ type: 'getSwitches', pageIdx: 0, pageSize: 8 })
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
            return this.$store.getters.loggedinUser
        }
    },

    components: {
        AppHeader,
        UserMsg
    }
}
</script>
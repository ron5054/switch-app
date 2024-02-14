<template>
    <section class="main-layout">
        <AppHeader />
        <RouterView />
    </section>
</template>

<script>
import AppHeader from './cmps/AppHeader.vue'

export default {
    name: 'App',

    async created() {
        try {
            const userCred = { username: 'dummy', password: '123' }
            const user = await this.$store.dispatch({ type: 'login', userCred })

            if(!user) {
                this.$router.push('/login')
                return
            }
            
            await this.$store.dispatch({ type: 'getSwitchesForHome' })
        } catch (err) {
            console.log('Something went wrong at app creation')
        }
    },

    components: {
        AppHeader
    }
}
</script>
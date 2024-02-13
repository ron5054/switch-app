<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: 'App',

    async created() {
        try {
            const userCred = { username: 'dummy', password: '123' }
            await this.$store.dispatch({ type: 'login', userCred })
            await this.$store.dispatch({ type: 'getSwitchesForHome' })
        } catch (err) {
            console.log('Something went wrong at app creation')
        }
    }
}
</script>
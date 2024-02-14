<template>
    <section class="app-header main-layout full">
        <div class="app-header-container flex justify-between align-center">
            <div class="logo">SwitchApp</div>
            <nav class="main-nav-container">
                <ul class="main-nav flex">
                    <li><RouterLink to="/">Resources</RouterLink></li>
                    <li><RouterLink to="/switch/search">Search</RouterLink></li>
                    <li><RouterLink to="/login" 
                        @click="onLogout"
                        :title="title">{{ msg() }}</RouterLink></li>
                </ul>
            </nav>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AppHeader',

    props: { user: Object },

    methods: {
        onLogout() {
            if(!this.user) return
            this.$emit('logout')
        },
        msg() {
            return this.user ? `Logout` : 'Login'
        }
    },

    computed: {
        title() {
            if(this.user) return 'Logout'
        }
    }
}
</script>
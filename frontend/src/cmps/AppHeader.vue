<template>
    <section class="app-header main-layout full">
        <div class="app-header-container flex justify-between align-center">
            <div class="logo">SwitchApp</div>
            <Backdrop :class="menuClass" @click="onToggleMenu"/>
            <nav class="main-nav-container" :class="menuClass">
                <ul class="main-nav flex">
                    <li>
                        <RouterLink to="/">Resources</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/switch/search">Search</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/login" @click="onLogout" :title="title">{{ msg() }}</RouterLink>
                    </li>
                </ul>
            </nav>
            <img class="menu-icon" src="../assets/img/menu.png" alt="menu icon" @click="onToggleMenu">
        </div>
    </section>
</template>

<script>
import Backdrop from './Backdrop.vue'
export default {
    name: 'AppHeader',

    props: { user: Object },

    data() {
        return {
            isMenuOpen: false
        }
    },

    methods: {
        onLogout() {
            if (!this.user) return
            this.$emit('logout')
        },
        msg() {
            return this.user ? `Logout` : 'Login'
        },
        onToggleMenu() {
            this.isMenuOpen = !this.isMenuOpen
        }
    },

    computed: {
        title() {
            if (this.user) return 'Logout'
        },
        menuClass() {
            return this.isMenuOpen ? 'menu-open' : ''
        }
    },

    components: {
        Backdrop
    }
}
</script>
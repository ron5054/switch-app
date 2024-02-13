<template>
    <section class="switch-search">
        <h1>SwitchSearch</h1>
        <input type="text" placeholder="Search" v-model="searchTerm">
    </section>
</template>

<script>
export default {
    name: 'SwitchSearch',
    data() {
        return {
            searchTerm: ''
        }
    },

    methods: {

    }
}
</script>
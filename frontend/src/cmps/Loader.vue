<template>
    <svg v-if="isLoading" viewBox="25 25 50 50" class="loader">
        <circle r="20" cy="50" cx="50"></circle>
    </svg>
</template>

<script>
export default {
    name: 'Loader',

    computed: {
        isLoading() {
            return this.$store.getters.isLoading
        }
    }
}
</script>
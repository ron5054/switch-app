<template>
    <article class="switch-search-preview" @click="goToDetails">
        <h1>{{ currSwitch.switch_id }}</h1>
        <img src="../assets/img/switch.png" alt="switch img">
    </article>
</template>

<script>
export default {
    name: 'SwitchSearchPreview',

    props: {
        currSwitch: { type: Object, required: true }
    },

    methods: {
        goToDetails() {
            this.$router.push(`/switch/${this.currSwitch.switch_id}`)
        }
    },
}
</script>
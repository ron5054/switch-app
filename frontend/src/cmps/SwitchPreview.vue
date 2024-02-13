<template>
    <section class="switch-preview" @click="goToDetails(currSwitch.switch_id)">
        <h1>{{ currSwitch.switch_id }}</h1>
    </section>
</template>

<script>
export default {
    name: 'SwitchPreview',
    props: {
        currSwitch: { type: Object, required: true }
    },
    methods: {
        goToDetails(switchId) {
            this.$router.push(`/switch/${switchId}`)
        }
    }
}
</script>
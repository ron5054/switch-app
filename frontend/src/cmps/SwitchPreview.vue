<template>
    <section class="switch-preview" @click="goToDetails(currSwitch.switch_id)">
        <h1>{{ currSwitch.switch_id }}</h1>
        <PortList :ports="currSwitch.ports" />
    </section>
</template>

<script>
import PortList from '../cmps/PortList.vue'
export default {
    name: 'SwitchPreview',
    props: {
        currSwitch: { type: Object, required: true }
    },
    methods: {
        goToDetails(switchId) {
            this.$router.push(`/switch/${switchId}`)
        }
    },
    components: {
        PortList
    }
}
</script>
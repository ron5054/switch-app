<template>
    <section v-if="currSwitch" class="switch-details">
        <h1 class="title">{{ currSwitch.switch_id }}</h1>
        <PortList :ports="currSwitch.ports" />
    </section>
</template>

<script>
import PortList from '../cmps/PortList.vue'
export default {
    name: 'SwitchDetails',

    data() {
        return {
            currSwitch: null
        }
    },

    created() {
        this.loadSwitch()
    },

    computed: {
        switchId() {
            return this.$route.params.switchId
        }
    },

    methods: {
        async loadSwitch() {
            this.currSwitch = await this.$store.dispatch({ type: 'getSwitch', switchId: this.switchId })
        }
    },
    watch: {
        switchId() {
            this.loadSwitch()
        },
    },

    components: {
        PortList
    }

}

</script>
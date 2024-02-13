<template>
    <section class="switch-details">
        <h1>SwitchDetails</h1>
        <h1>{{ currSwitch.switch_id }}</h1>
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
    async created() {
        await this.loadStation()
    },
    computed: {
        switchId() {
            return this.$route.params.switchId
        }
    },

    methods: {
        async loadStation() {
            console.log(this.switchId);
            // const currSwitch = await this.$store.dispatch({ type: 'getSwitch', switchId: this.switchId })
            // this.currSwitch = currSwitch
        }
    },
    watch: {
        switchId() {
            this.loadStation()
        },
    },

    components: {
        PortList
    }

}

</script>
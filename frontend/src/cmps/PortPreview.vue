<template>
    <section v-if="inHome" class="port-preview">
        <div class="status" :style="{ backgroundColor: backgroundColor }" :title="portDetails"></div>
    </section>
    <section v-else class="port-preview ">
        <div class="status in-details" :style="{ backgroundColor: backgroundColor }" :title="portDetails">
            <h1>{{ currPort.host?.hostName }}</h1>
            <h2>{{ currPort.host?.ip_address }}</h2>
            <h3 v-if="currPort.host">vlan: {{ currPort.host?.vlan }}</h3>
        </div>
    </section>
</template>

<script>
export default {
    name: 'PortPreview',
    props: {
        currPort: { type: Object, required: true }
    },
    computed: {
        backgroundColor() {
            return this.currPort.status === true ? 'green' : '#ad3030'
        },
        portDetails() {
            if (this.currPort.host) return `${this.currPort.host?.hostName} (${this.currPort.host?.ip_address}) vlan: ${this.currPort.host?.vlan}`
        },
        inHome() {
            return this.$route.path === '/'
        }
    }
}
</script>
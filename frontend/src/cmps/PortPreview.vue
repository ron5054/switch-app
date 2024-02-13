<template>
    <section class="port-preview">
        <div class="status" :style="{ backgroundColor: backgroundColor }" :title="portDetails"></div>
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
            return this.currPort.status === true ? 'green' : 'red'
        },
        portDetails() {
            if (this.currPort.host) return `${this.currPort.host?.hostName} (${this.currPort.host?.ip_address}) vlan: ${this.currPort.host?.vlan}`
        }
    }
}
</script>
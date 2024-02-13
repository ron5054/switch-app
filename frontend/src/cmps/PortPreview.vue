<template>
    <section class="port-preview">
        <h1>{{ currPort.status }}</h1>
        <h2>{{ currPort.host.hostname }}</h2>
        <h2>{{ currPort.host.ip_address }}</h2>
        <h2>{{ currPort.host.vlan }}</h2>
    </section>
</template>

<script>
export default {
    name: 'PortPreview',
    props: {
        currPort: { type: Object, required: true }
    }
}
</script>
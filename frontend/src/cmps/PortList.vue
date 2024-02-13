<template>
    <ul class="port-list">
        <li v-for="currPort in ports" :key="currPort">
            <PortPreview :currPort="currPort" />
        </li>
    </ul>
</template>

<script>
import PortPreview from './PortPreview.vue'

export default {
    name: 'PortList',
    props: {
        ports: { type: Array, required: true }
    },
    created() {
        console.log(this.ports)
    },
    components: {
        PortPreview
    }
}
</script>
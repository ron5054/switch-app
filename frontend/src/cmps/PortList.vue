<template>
    <section class="port-list-container">
        <ul class="port-list">
            <li v-for="currPort in ports" :key="currPort">
                <PortPreview :currPort="currPort" />
            </li>
        </ul>
    </section>
</template>

<script>
import PortPreview from './PortPreview.vue'

export default {
    name: 'PortList',
    props: {
        ports: { type: Array, required: true }
    },
    components: {
        PortPreview
    }
}
</script>
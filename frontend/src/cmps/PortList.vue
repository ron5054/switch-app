<template>
    <ul class="port-list" :style="{ maxWidth: maxWidth }">
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
    computed: {
        maxWidth() {
            return this.$route.path === '/' ? '24rem' : 'unset'
        }
    },
    components: {
        PortPreview
    }
}
</script>
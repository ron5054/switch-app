<template>
    <ul class="switch-list">
        <li v-for="currSwitch in switches" :key="currSwitch.switch_id">
            <SwitchPreview :currSwitch="currSwitch" />
        </li>
    </ul>
</template>

<script>
import SwitchPreview from './SwitchPreview.vue'

export default {
    name: 'SwitchList',
    props: {
        switches: { type: Array, required: true }
    },
    components: {
        SwitchPreview
    }
}
</script>
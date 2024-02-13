<template>
    <section class="switch-list-container">
        <ul class="switch-list">
            <li v-for="currSwitch in switches" :key="currSwitch.switch_id">
                <SwitchPreview :currSwitch="currSwitch" />
            </li>
        </ul>
    </section>
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
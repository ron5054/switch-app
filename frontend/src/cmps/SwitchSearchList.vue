<template>
    <ul class="switch-search-list">
        <Loader />
        <li v-for="currSwitch in switches" :key="currSwitch.switch_id">
            <SwitchSearchPreview :currSwitch="currSwitch" />
        </li>
    </ul>
</template>

<script>
import SwitchSearchPreview from './SwitchSearchPreview.vue'
import Loader from './Loader.vue';

export default {
    name: 'SwitchSearchList',
    props: {
        switches: { type: Array, required: true }
    },
    components: {
        SwitchSearchPreview,
        Loader
    }
}
</script>
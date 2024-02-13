<template>
    <section class="switch-index">
        <h1>switches</h1>
        <SwitchList :switches="switches" />
    </section>
</template>

<script>
import SwitchList from '../cmps/SwitchList.vue';
export default {
    name: 'SwitchIndex',
    computed: {
        switches() {
            return this.$store.getters.switchesForHome
        }
    },
    components: {
        SwitchList
    }
}
</script>
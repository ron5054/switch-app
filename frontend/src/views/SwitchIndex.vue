<template>
    <section class="switch-index">
        <h1>Switches</h1>
        <Loader />
        <SwitchList :switches="switches" />
    </section>
</template>

<script>
import SwitchList from '../cmps/SwitchList.vue';
import Loader from '../cmps/Loader.vue';

export default {
    name: 'SwitchIndex',
    computed: {
        switches() {
            return this.$store.getters.switchesForHome
        }
    },
    components: {
        SwitchList,
        Loader
    }
}
</script>
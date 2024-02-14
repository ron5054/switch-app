<template>
    <section class="switch-index">
        <h1>Switches</h1>
        <SwitchList :switches="switches" />
        <Loader />
        <section class="pagination">
            <button class="btn-prev" @click="changePage(-1)">◀</button>
            <span class="currPage">{{ pageIdx + 1 }}</span>
            <button class="btn-next" @click="changePage(1)">▶</button>
        </section>
    </section>
</template>

<script>
import SwitchList from '../cmps/SwitchList.vue';
import Loader from '../cmps/Loader.vue';

export default {
    name: 'SwitchIndex',

    data() {
        return {
            pageIdx: 0,
            pageSize: 8
        }
    },

    methods: {
        async changePage(diff) {
            if (this.pageIdx === 0 && diff === -1) return
            if (this.switches.length < this.pageSize && diff === 1) return  

            this.pageIdx += diff
            try {
                this.$store.dispatch({ type: 'getSwitches', pageIdx: this.pageIdx, pageSize: this.pageSize })
            } catch (err) {
                console.log('Could not change page', err);
            }
        }
    },

    computed: {
        switches() {
            return this.$store.getters.switches
        }
    },

    components: {
        SwitchList,
        Loader
    }
}
</script>
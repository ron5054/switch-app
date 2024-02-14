<template>
    <section class="switch-search">
        <input type="text" placeholder="Enter switch id / host name or ip" v-model="searchTerm">
        <SwitchSearchList :switches="switches" :layout="'table'"/>
    </section>
</template>

<script>
import { utilService } from '../services/util.service'
import SwitchSearchList from '../cmps/SwitchSearchList.vue'

export default {
    name: 'SwitchSearch',
    data() {
        return {
            searchTerm: ''
        }
    },

    created() {
        this.search = utilService.debounce(()=> {
            this.$store.dispatch({type: 'getSearchRes', term: this.searchTerm })
        }, 600)

        const { term } = this.$route.params
        if(term) {
            this.searchTerm = term
            this.search()
        }
    },

    computed: {
        switches() {
            return this.$store.getters.searchRes
        }
    },

    watch: {
        searchTerm() {
            this.search()
        }
    },

    components: {
        SwitchSearchList,
    }
}
</script>
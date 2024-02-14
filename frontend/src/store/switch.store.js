import { switchService } from '../services/switch.service'

export const switchStore = {
    state: {
        isLoading: false,
        switches: [],
        searchRes: [],
    },
    getters: {
        switches({ switches }) { return switches },
        searchRes({ searchRes }) { return searchRes },
        isLoading( { isLoading }) { return isLoading }
    },
    mutations: {
        setIsLoading(state, value) {
            state.isLoading = value
        },
        setSearchRes(state, { res }) {
            state.searchRes = res
        },
        setSwitches(state, { switches }) {
            state.switches = switches
        }
    },
    actions: {
        async getSwitches({ commit }, { pageIdx, pageSize }) {
            commit('setIsLoading', true)
            try {
                const switches = await switchService.getSwitches({ pageIdx, pageSize })
                commit({ type: 'setSwitches', switches })
            } catch (err) {
                console.log('SwitchStore: Error in getSwitches', err.message)
                throw new Error('Could not load switches for home page')
            } finally {
                commit('setIsLoading', false)
            }
        },

        async getSwitch({ commit }, { switchId }) {
            commit('setIsLoading', true)
            try {
                const currSwitch = await switchService.getById(switchId)
                return currSwitch
            } catch (err) {
                console.log(err.message)
                throw new Error('Could not get switch')
            } finally {
                commit('setIsLoading', false)
            }
        },
        async getSearchRes({ commit }, { term }) {
            if (!term) {
                commit({ type: 'setSearchRes', res: [] })
                return
            }
            try {
                commit('setIsLoading', true)
                const res = await switchService.getSwitches({ term })
                commit({ type: 'setSearchRes', res })
            } catch (err) {
                console.log(err.message)
                throw new Error('Could not search result')
            } finally {
                commit('setIsLoading', false)
            }
        },
    }
}
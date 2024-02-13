import { switchService } from '../services/switch.service'

export const switchStore = {
    state: {
        isLoading: false,
        switchesForHome: [],
        searchRes: [],
    },
    getters: {
        switchesForHome({ switchesForHome }) { return switchesForHome },
        searchRes({ searchRes }) { return searchRes },
    },
    mutations: {
        setLoading(state, value) {
            state.isLoading = value
        },
        setSearchRes(state, { res }) {
            state.searchRes = res
        },
        setSwitchesForHome(state, { switches }) {
            state.switchesForHome = switches
        }
    },
    actions: {
        async getSwitchesForHome({ commit }) {
            commit('setLoading', true)
            try {
                const switches = await switchService.getSwitchesForHome()
                commit({ type: 'setSwitchesForHome', switches })
            } catch (err) {
                console.log('SwitchStore: Error in getSwitchesForHome', err.message)
                throw new Error('Could not load switches for home page')
            }
            finally {
                commit('setLoading', false)
            }
        },

        async getSwitch({ }, { switchId }) {
            try {
                const currSwitch = await switchService.getById(switchId)
                return currSwitch
            } catch (err) {
                console.log(err.message)
                throw new Error('Could not get switch')
            }
        },
        async getSearchRes({ commit }, { query }) {
            if (!query) {
                commit({ type: 'setSearchRes', res: [] })
                return
            }
            try {
                const res = await switchService.getSearchRes(query)
                commit({ type: 'setSearchRes', res: res })
            } catch (err) {
                console.log(err.message)
                throw new Error('Could not get tracks')
            }
        },
    }
}
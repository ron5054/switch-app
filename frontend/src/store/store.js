import Vuex from 'vuex'

import { userStore } from './user.store.js'
import { switchStore } from './switch.store.js'

export const store = Vuex.createStore({
  strict: true,
  modules: {
    userStore,
    switchStore,
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})

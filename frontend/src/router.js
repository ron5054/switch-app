import { createRouter, createWebHashHistory } from 'vue-router'

import LoginPage from './views/LoginPage.vue'
import SwitchIndex from './views/SwitchIndex.vue'
import SwitchDetails from './views/SwitchDetails.vue'
import SwitchSearch from './views/SwitchSearch.vue'

const routes = [
  {
    path: '/',
    name: 'SwitchIndex',
    component: SwitchIndex
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage,
  },
  {
    path: '/switch/:switchId',
    name: 'SwitchDetails',
    component: SwitchDetails
  },
  {
    path: '/switch/search/:switchId?',
    name: 'SwitchSearch',
    component: SwitchSearch
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})


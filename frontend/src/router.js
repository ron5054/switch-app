import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './views/Login.vue'
import SwitchIndex from './views/SwitchIndex.vue'
import SwitchDetails from './views/SwitchDetails.vue'

const routes = [
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'SwitchIndex',
    component: SwitchIndex
  },
  {
    path: '/switch/:switchId',
    name: 'SwitchDetails',
    component: SwitchDetails
  }
]


export const router = createRouter({
  routes,
  history: createWebHashHistory()
  // base: process.env.BASE_URL,
})


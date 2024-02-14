import { createRouter, createWebHashHistory } from 'vue-router'
import { userService } from './services/user.service'

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

router.beforeEach((to, from) => {
  if(to.path === '/login') return
  const user = userService.getLoggedinUser()
  return user ? true : false
})
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Season from '../views/Season.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/season',
    name: 'season',
    component: Season
  },
  {
    path: '/underdev',
    name: 'Under Development',
    component: () => import(/* webpackChunkName: "about" */ '../views/Underdevelopment.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

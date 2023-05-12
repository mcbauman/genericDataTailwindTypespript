import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DefineFields.vue'
import ListView from "../views/ShowValues.vue"
import SettingsView from "../views/SettingsView.vue"
import MainPage from '@/views/MainPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EnterValues.vue')
    },
    {
      path:"/ShowValues",
      name:"ShowValues",
      component:ListView
    },
    {
      path:"/settings",
      name:"settings",
      component:SettingsView
    },
    {
      path:'/main',
      component:MainPage
    }
  ]
})

export default router

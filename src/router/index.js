import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bath',
      name: 'bath',
      component: () => import('../views/BathView.vue')
    },
    {
      path: '/beyond',
      name: 'beyond',
      component: () => import('../views/BeyondView.vue')
    },
    {
      path: '/curtain',
      name: 'curtain',
      component: () => import('../views/CurtainView.vue')
    },
    {
      path: '/flooring',
      name: 'flooring',
      component: () => import('../views/FlooringView.vue')
    },
    {
      path: '/kitchen',
      name: 'kitchen',
      component: () => import('../views/KitchenView.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: AboutView
    // }
  ]
})

export default router

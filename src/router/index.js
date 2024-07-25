import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import AboutView from '@/views/AboutView.vue'

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
      component: () => import('../views/AboutView.vue')
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
      path: '/contact-us',
      name: 'contact-us',
      component: () => import('../views/ContactUsView.vue')
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

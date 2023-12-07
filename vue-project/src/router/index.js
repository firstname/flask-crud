import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import Ping from '../components/Ping.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }, 
    {
      path: '/ping',
      name: 'ping',
      component: () => import('../components/Ping.vue')
    }, 
    {
      path: '/book',
      name: 'book',
      component: () => import('../components/Book.vue')
    }
  ]
})

export default router

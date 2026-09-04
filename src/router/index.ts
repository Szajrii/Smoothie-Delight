import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      redirect: { path: '/', hash: '#shop' }
    },
    {
      path: '/builder',
      redirect: { path: '/', hash: '#builder' }
    },
    {
      path: '/blog',
      redirect: { path: '/', hash: '#blog' }
    },
    {
      path: '/contact',
      redirect: { path: '/', hash: '#contact' }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80
      }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router

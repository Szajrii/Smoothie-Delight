import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import contact from '../components/contact'
import shop from '../components/shop'
import blog from '../components/blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog
    }
  ]
})

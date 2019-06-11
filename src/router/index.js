import Vue from 'vue'
import Router from 'vue-router'
import main from '../components/main'
import contact from '../components/contact'

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
    }
  ]
})

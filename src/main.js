import Vue from 'vue'
import App from './App'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll'
require('./css/style.css');

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

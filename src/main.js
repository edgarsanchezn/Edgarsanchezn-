import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import './assets/tailwind.min.css'
import router from './router'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

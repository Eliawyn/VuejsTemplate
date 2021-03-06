import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Require the main Sass manifest file
require('./assets/main.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

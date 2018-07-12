import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tiles from './views/Tiles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tiles',
      name: 'tiles',
      component: Tiles
    }
  ]
})

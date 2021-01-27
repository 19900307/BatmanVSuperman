import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Select from '@/components/Select'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/game',
      name: 'Game',
      component: Game
    }
  ]
})

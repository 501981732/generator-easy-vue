import Vue from 'vue'
import Router from 'vue-router'
import { routerBaseUrl } from '@/config/env.js'
import HelloWorld from '@/pages/HelloWorld'
// chunkname
// const index = () => import( /* webpackChunkName: "index" */ '@/pages/index')

Vue.use(Router)

export default new Router({
  mode: "hash",
  base: routerBaseUrl,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})

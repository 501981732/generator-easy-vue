import Vue from 'vue'
import Router from 'vue-router'
import { routerBaseUrl } from '@/config/env.js'
import HelloWorld from '@/pages/HelloWorld'
// const HelloWorld = () => import('@/pages/HelloWorld')

const <%= page%> = () => import('@/pages/<%= page%>')

Vue.use(Router)

export default new Router({
  mode: "hash",
  base: routerBaseUrl,
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/<%= page%>',
      name: '<%= page%>',
      component: <%= page%>
    }
  ]
})

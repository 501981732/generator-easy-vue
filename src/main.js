// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

import store from '@/store/'

Vue.config.productionTip = false

import 'babel-polyfill' // API垫片


import './assets/css/reset.css'


// REM布局方案  OR vw布局
import 'amfe-flexible/index.js'

// vue插件 
import AlertPlugin from './plugins/alert/index.js'
Vue.use(AlertPlugin)

// 自动注入components
import './components/global.js'

window.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


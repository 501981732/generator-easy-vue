// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
<% if(vuex) {%>
import store from '@/store/'
<% }%><% if(layout === 'rem' || layout === 'vw') {%>
import FastClick from 'fastclick'
<% }%>

Vue.config.productionTip = false

import 'babel-polyfill' // API垫片

<% if(reset === 'reset.css') {%>
import './assets/css/reset.css'
<% } else if (reset === 'normalize.css') {%>
import './assets/css/normalize.css'
<% }%>
<% if(layout === 'rem') {%>
// REM布局方案  OR vw布局
import 'amfe-flexible/index.js'
FastClick.attach(document.body);
<% } else if (layout === 'vw') {%>
FastClick.attach(document.body);
<% }%>
// vue插件 
import AlertPlugin from './plugins/alert/index.js'
Vue.use(AlertPlugin)

// 自动注入components
import './components/global.js'

window.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,<% if(vuex) {%>
  store,<% }%>
  components: { App },
  template: '<App/>'
})


import Vue from 'vue'
import <%=mpage%> from './<%=mpage%>.vue'
import router from '@/router'
import axios from 'axios'
// import store from '@/store/'
// import FastClick from 'fastclick'

Vue.config.productionTip = false

import 'babel-polyfill' // API垫片

// import '@/assets/css/reset.css'
// import '@/assets/css/normalize.css'

// import 'amfe-flexible/index.js'
// FastClick.attach(document.body);

// vue插件
import AlertPlugin from '@/plugins/alert/index.js'
Vue.use(AlertPlugin)

// 自动注入components
import '@/components/global.js'

window.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { <%=mpage%> },
  template: '<<%=mpage%>/>'
})


// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<% if(vuex) {%>
import store from '@/store/'
<% }%><% if(layout === 'rem' || layout === 'vw') {%>
import FastClick from 'fastclick'
<% }%>

import api from "@/config/apis.js";

Vue.config.productionTip = false

import 'babel-polyfill' // API垫片

<% if(reset === 'reset.css') {%>
import './assets/css/reset.css'
<% } else if (reset === 'normalize.css') {%>
import './assets/css/normalize.css'
<% }%>
import "./assets/css/animation.css";
import "./assets/css/common.css";

<% if(layout === 'rem') {%>
// REM布局方案  OR vw布局
import 'amfe-flexible/index.js'
FastClick.attach(document.body);
<% } else if (layout === 'vw') {%>
FastClick.attach(document.body);
<% }%>
// 时间总线
import '@/eventBus/eventBus'
/* eslint-disable no-unused-vars */
// import vConsole from "vconsole";
// const insvConsole = new vConsole();

// 自动注入components
import './components/global.js'

// vue插件
import AlertPlugin from "./plugins/alert/index.js";
import ToastPlugin from "./plugins/toast/index.js";
import ConformPlugin from "./plugins/confirm/index.js";
import LoadingPlugin from "./plugins/loading/index.js";

Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(ConformPlugin);
Vue.use(LoadingPlugin);
// mount api
Vue.prototype.$api = api;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,<% if(vuex) {%>
  store,<% }%>
  components: { App },
  template: '<App/>'
})


import Vue from 'vue'
import Vuex from 'vuex'
import list from './modules/list'
import createLogger from 'vuex/dist/logger'
import * as actions from './actions.js'
import * as mutations from './mutations.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    list,
  },
  actions,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
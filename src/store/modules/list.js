/**
 * 分模块处理vuex
 */
import * as types from '../types'

const state = {
	info: {}
}

const actions = {

}

const getters = {
  info: state => state.info,
}

const mutations = {
  [types.SET_INFO](state, payload) {
    state.info = payload
  },
}

export default {
  state,
  actions,
  getters,
  mutations
}

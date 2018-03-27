
import * as types from '../types'

const state = {
  title: '',
  loading: 0,
  leftNavStatus: false
}

const mutations = {
  [types.COM_CONF](state,config) {
    state = Object.assign(state,config)
  },
  [types.COM_LOADING_STATUS](state,status) {
    if(state.status == 0 && !status) return
    state.loading = status ? ++state.loading:--state.loading
  },
  [types.CHANGE_LEFTNAV_STATUS](state,status) {
    state.leftNavStatus = status
  }
}

const actions = {
  comConf({commit},config) {
    commit(types.COM_CONF,config)
  },
  changeLeftNavStatus({commit},status) {
    commit(types.CHANGE_LEFTNAV_STATUS,status)
  }
}

const getters = {
  comConf: state => state,
  loading: state => state.loading,
  title: state => state.title,
  leftNavStatus: state => state.leftNavStatus
}

export default {
  state,
  mutations,
  actions,
  getters
}
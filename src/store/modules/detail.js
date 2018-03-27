import api from '../api'
import * as types from '../types'

const state = {
  detail: null
}

const mutations = {
  [types.DETAIL_GET_INFO](state,res) {
    state.detail = res.film
  }
}

const actions = {
  getFilmInfo({commit},id) {
    commit(types.COM_LOADING_STATUS,true)
    api.getFilmInfo(id).then(res => {
      commit(types.COM_CONF,{
        title: res.film.name
      })
      commit(types.DETAIL_GET_INFO,res)
      commit(types.COM_LOADING_STATUS,false)
    })
  }
}

const getters = {
  getFilmInfo: state => state.detail
}

export default {
  state,
  mutations,
  actions,
  getters
}
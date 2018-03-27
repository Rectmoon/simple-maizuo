import api from '../api'

import * as types from '../types'

const state = {
  banners: [],
  nowplays: [],
  comings: []
}

const actions = {
  getBannerList({commit}) {
    commit(types.COM_LOADING_STATUS,true)
    api.getBannerList().then(res => {
      commit(types.HOME_GET_BANNER_LIST,res)
      commit(types.COM_LOADING_STATUS,false)
    })
  },
  getNowPlaying({commit}) {
    commit(types.COM_LOADING_STATUS,true)
    api.getNowPlaying().then(res => {
      commit(types.HOME_GET_NOWPLAYING_LIST,res)
      commit(types.COM_LOADING_STATUS,false)
    })
  },
  getComingSoon({commit}) {
    commit(types.COM_LOADING_STATUS,true)
    api.getComingSoon().then(res => {
      commit(types.HOME_GET_COMINGSOON_LIST,res)
      commit(types.COM_LOADING_STATUS,false)
    })
  }
}

const mutations = {
  [types.HOME_GET_BANNER_LIST](state,res) {
    state.banners = res.billboards
  },
  [types.HOME_GET_NOWPLAYING_LIST](state,res) {
    state.nowplays = res.films
  },
  [types.HOME_GET_COMINGSOON_LIST](state,res) {
    state.comings = res.films
  }
}

const getters = {
  banners: state => state.banners,
  nowplays: state => state.nowplays,
  comings: state => state.comings
}

export default {
  state,
  mutations,
  actions,
  getters
}
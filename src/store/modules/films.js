import api from '../api'
import * as types from '../types'

const state = {
  thisPage: 0,
  comingPage: 0,
  nowList: [],
  comingList: [],
  getNowMore: true,
  getComingMore: true 
}

const mutations = {
  [types.FILM_GET_NOWPLAYING](state,res) {
    state.nowList = state.nowList.concat(res.films)
    state.getNowMore = res.page.current<res.page.total
  },
  [types.FILE_NOWPLAYING_NUM](state) {
    state.thisPage += 1
    state.getNowMore = false
  },
  [types.FILM_GET_COMINGSOON](state,res) {
    state.comingList =  state.comingList.concat(res.films)
    state.getComingMore = res.page.current<res.page.total
  },
  [types.FILM_COMINGSOON_NUM](state) {
    state.comingPage += 1
    state.getComingMore = false
  },
}

const actions = {
  getNowPlayingList({commit}) {
    if(state.getNowMore) {
      commit(types.FILE_NOWPLAYING_NUM)
      api.getNowPlayingList(state.thisPage).then(res => {
        commit(types.FILM_GET_NOWPLAYING,res)
      })
    }
  },
  getComingList({commit}) {
    if(state.getComingMore) {
      commit(types.FILM_COMINGSOON_NUM)
      api.getComingList(state.comingPage).then(res => {
        commit(types.FILM_GET_COMINGSOON,res)
      })
    }
  }
}

const getters = {
  nowPlayingList: state => state.nowList,
  comingList: state => state.comingList
}


export default {
  state,
  mutations,
  actions,
  getters
}
import api from '../api'
import * as types from '../types'

const state = {
  list: [],
  district: []
}


const mutations = {
  [types.CINEMA_GET_LIST](state,res) {
    let arr = res.map((item,i) => {
      let obj = {}
      obj.name = item.district.name
      obj.pinyin= item.district.pinyin
      return obj
    })
    arr = arr.unique('name').sort((a,b) => {
      return a.pinyin.localeCompare(b.pinyin.charAt(0))
    })
    state.district = arr
    state.list = res
  }
}

const actions = {
  getCinemaList({commit},id) {
    commit(types.COM_LOADING_STATUS,true)
    api.getCinemaList(id).then(res => {
      commit(types.CINEMA_GET_LIST,res.cinemas)
      commit(types.COM_LOADING_STATUS,false)
    })
  }
}

const getters = {
  list: state => state.list,
  district : state => state.district
}


export default {
  state,
  mutations,
  actions,
  getters
}
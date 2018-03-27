import Vue from 'vue'
import Vuex from 'vuex'

import base from './modules/base'
import home from './modules/home'
import detail from './modules/detail'
import cinema from './modules/cinema'
import films from './modules/films'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    base, 
    home,
    detail,
    cinema,
    films
  }
})
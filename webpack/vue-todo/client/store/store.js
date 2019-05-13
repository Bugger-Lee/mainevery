import Vue from 'vue'
import Vuex from 'vuex'

import stateDefault from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: stateDefault,
  mutations,
  getters,
  actions
})

export default store
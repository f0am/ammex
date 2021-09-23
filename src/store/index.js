/**
 * Vuex
 *
 * @library
 *
 * https://vuex.vuejs.org/en/
 */

// Lib imports
import Vue from 'vue'
import Vuex from 'vuex'
import { VuexModel, crudder } from './resources/Crudder/VuexModel'

// Store functionality
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import modules from './modules'

Vue.use(Vuex)

// Create a new store
const store = new Vuex.Store({
  actions,
  getters,
  modules,
  mutations,
  state,
  plugins: [crudder]
})

export default store

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


// All methods below are temporary and will be deleted. Using them for dummy data returns


// import * as gqlQueries from "@/graphql/queries";
// import * as gqlMutations from "@/graphql/mutations";
// import { API } from 'aws-amplify';

// VuexModel.setClient(API)

// export const Client = new VuexModel('client', { ...gqlQueries, ...gqlMutations});
// export const User = new VuexModel('user',{ ...gqlQueries, ...gqlMutations});
// export const Contract = new VuexModel('contract',{ ...gqlQueries, ...gqlMutations})

// export const Quote = new VuexModel('quotes')
// Quote.addMethod('fetchQuotes', async ({ commit }) => {
//   const data = [
//     {
//       id: 1,
//       customer: 'Client A',
//       representative: 'Maxim Beauregard',
//       deliveryDate: '10 Novembre 2019',
//       updatedAt: '22 Décembre 2019',
//       createdAt: '20 Décembre 2019',
//       total: 10499
//     },
//     {
//       id: 2,
//       customer: 'Client B',
//       representative: 'Jeremie Robitaille',
//       deliveryDate: '10 Novembre 2019',
//       updatedAt: '22 Décembre 2019',
//       createdAt: '20 Décembre 2019',
//       total: 20599
//     }
//   ]



//   commit('set', data)
// })



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

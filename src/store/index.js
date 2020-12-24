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

export const Quote = new VuexModel('quotes')
Quote.addMethod('fetchQuotes', async ({ commit }) => {
  const data = [
    {
      id: 1,
      customer: 'Client A',
      representative: 'Maxim Beauregard',
      deliveryDate: '10 Novembre 2019',
      updatedAt: '22 Décembre 2019',
      createdAt: '20 Décembre 2019',
      total: 10499
    },
    {
      id: 2,
      customer: 'Client B',
      representative: 'Jeremie Robitaille',
      deliveryDate: '10 Novembre 2019',
      updatedAt: '22 Décembre 2019',
      createdAt: '20 Décembre 2019',
      total: 20599
    }
  ]



  commit('set', data)
})

export const Billable = new VuexModel('billables')
Billable.addMethod('fetchBillables', async ({ commit }) => {
  const data = [
    {
      id: 1,
      customer: 'Client A',
      representative: 'Maxim Beauregard',

    },
    {
      id: 2,
      customer: 'Client B',
      representative: 'Jeremie Robitaille',
    }
  ]

  commit('set', data)
})

export const Effort = new VuexModel('efforts')
Effort.addMethod('fetchEfforts', async ({ commit }) => {
  const data = [
    {
      id: 1,
      name: 'Effort 1',
      location: 'location',
    },
    {
      id: 2,
      name: 'Effort 2',
      location: 'Location',
    }
  ]

  commit('set', data)
})

export const Client = new VuexModel('customers')
Client.addMethod('fetchClients', async ({ commit }) => {
  const data = [
    {
      id: 1,
      name: 'Client #1',
      address: '123 rue Techform',
    },
    {
      id: 2,
      name: 'Client #2',
      address: '345 rue Montal',
    }
  ]
  commit('set', data)
})

export const Contact = new VuexModel('contacts')
Contact.addMethod('fetchContacts', async ({ commit }) => {
  const data = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
      phone: '819 123 4567'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane.doe@email.com',
      phone: '819 123 4568'
    },
  ]

  commit('set', data)

  // commit('set', data.map(i => {
  //   return {
  //     ...i,
  //     fullName: `${i.firstName} ${i.lastName}`
  //   }
  // }))
})

export const Representative = new VuexModel('representatives')
Representative.addMethod('fetchRepresentatives', async ({ commit }) => {
  const data = [
    {
      id: 1,
      firstName: 'Maxime',
      lastName: 'Beauregard',
      email: 'maxime@email.com',
      phone: '819 123 4567'
    },
    {
      id: 2,
      firstName: 'Jérémie',
      lastName: 'Robitaille',
      email: 'jeremie@email.com',
      phone: '819 123 4568'
    },
  ]
  commit('set', data.map(i => {
    return {
      ...i,
      fullName: `${i.firstName} ${i.lastName}`
    }
  }))
})

export const Product = new VuexModel('products')
Product.addMethod('fetchProducts', async ({ commit }) => {
  const data = [];

  for (let i = 1; i < 15; i++) {
    data.push({
      id: i,
      name: `item ${i}`,
      description: `Description pour item ${i}`,
      price: (Math.random() * 100).toFixed(2),
    })
  }

  commit('set', data)
})


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

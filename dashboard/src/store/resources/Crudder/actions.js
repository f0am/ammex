// Default actions
import { VuexModel } from './VuexModel'

export default function (resource) {
  // const vuexModel = this
  return {
    async fetch ({ commit }) {
      commit('startLoad')
      try {
        const { data } = await VuexModel.client.get(`${resource}`)
        commit('setList', { data })
      } catch (e) {
        commit('error', e)
      }

      commit('finishLoad')
    },

    async get ({ commit }, id) {
      commit('startLoad')
      try {
        const { data } = await VuexModel.client.get(`${resource}/${id}`)
        commit('setList', { data })
      } catch (e) {
        commit('error', e)
      }

      commit('finishLoad')
    },

    async create ({ commit }, data) {
      commit('startLoad')

      try {
        const response = await VuexModel.client.post(`${resource}`, { data })
        commit('setList', { data: response.data })
      } catch (e) {
        commit('error', e)
      }

      commit('finishLoad')
    },

    async update ({ commit }, data) {
      commit('startLoad')

      try {
        const response = await VuexModel.client.put(`${resource}/${data.id}`, {
          data: { ...data }
        })
        commit('setList', { data: response.data })
      } catch (e) {
        commit('error', e)
      }

      commit('finishLoad')
    },

    async delete ({ commit }, id) {
      commit('startLoad')

      try {
        const response = await VuexModel.client.delete(`${resource}/${id}`)
        commit('setList', { data: response.data })
      } catch (e) {
        commit('error', e)
      }

      commit('finishLoad')
    }
  }
}

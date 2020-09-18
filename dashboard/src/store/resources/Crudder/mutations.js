import Vue from 'vue'

export default () => ({
  set (state, payload) {
    state.data = payload
  },

  setList (state, { attr, data }) {
    if (data.constructor === Array) {
      state.data = {}
      data.forEach(item => {
        Vue.set(state.data, item[attr] || item.id, item)
      })
    } else {
      Vue.set(state.data, data[attr] || data.id, data)
    }
  },

  error (state, payload) {
    state.error = payload
  },

  startLoad (state) {
    state.loading = true
  },

  finishLoad (state) {
    state.loading = false
  },
  setToken (state, token) {
    state.token = token
  }
})

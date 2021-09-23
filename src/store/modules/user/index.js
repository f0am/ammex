import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  name: '',
  role: '',
  authenticated: false
}

export default {
  state,
  getters,
  actions,
  mutations
}

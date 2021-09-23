export default {
  login ({ commit }, userName, password) {
    commit('setUser', { name: 'Maxim Beauregard', role: 'admin', authenticated: true })
  }
}

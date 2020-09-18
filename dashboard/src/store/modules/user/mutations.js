export default {
  setUser (state, user) {
    state.name = user.name
    state.role = user.role
    state.authenticated = user.authenticated
    console.log(state)
  }
}

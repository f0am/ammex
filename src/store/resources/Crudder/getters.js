// Default getters

export default () => ({
  data: (state) => !state.loading && state.data,
  all: (state) => Object.values(state.data) || [],
  find: (state) => (id) => {
    return state.data[id]
  },
  isLoading: (state) => state.loading
})

let counter = {
  namespaced: true,
  state: {
    count: 545,
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
}

export default counter
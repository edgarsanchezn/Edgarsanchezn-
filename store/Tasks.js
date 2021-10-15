let Tasks = {
  namespaced: true,
  state: { 
      tasks: [1,2,3,4,5], 
  },
  getters: {
    TasksCount: state => {
      return state.tasks.length
    }
  },
  mutations: { 
          add (state, newtask){
            state.tasks.push(newtask)
        },
  },
}

export default Tasks
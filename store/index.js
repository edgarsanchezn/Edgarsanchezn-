import counter from "./counter.js"
import Tasks from "./Tasks.js"


export default new Vuex.Store({
    modules: {
      counter,
      Tasks
    }
  })
import counter from "./counter.js"
import Tasks from "./Tasks.js"
import Users from "./Users.js"



export default new Vuex.Store({
    modules: {
      counter,
      Tasks,
      Users
    }
  })
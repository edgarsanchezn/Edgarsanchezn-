import Users from './API/Users.js'

export default {
    namespaced: true,
    state: { 
        users: [], 
        connection: new Users()
    },
    actions: {

    async all({state}){
        state.users = await state.connection.read();
    },
        add({state, dispatch}, newUser){
          state.connection.create(newUser)
          dispatch("all");
      },
      update({state, dispatch}, User){
        state.connection.update(User)
        dispatch("all");
    },
    delete({state, dispatch}, userId){
      state.connection.delete(userId)
      dispatch("all");
  },
    },
    getters: {
      usersCount: state => {
        return state.users.length
      }
    },

  }

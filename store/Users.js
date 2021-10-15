//import { Users } from './API.js'

export default {
    namespaced: true,
    state: { 
        users: [], 
    },
    getters: {
      usersCount: state => {
        return state.users.length
      }
    },
    mutations: { 
          add (state, newuser){
              state.users.push(newuser)
          },
         async getUsers (state){
            await fetch('./assets/users.json').then(data => data.json()).then(data => state.users = data)
            //  state.users = Users
          }
    },
  }

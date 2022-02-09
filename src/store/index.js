import Vue from 'vue'
import Vuex from 'vuex'
import constants from './modules/constants'

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        constants
    }
  })


export default store
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    isLogged: false
  },
  getters: {
  },
  mutations: {
    changeLogg(state){
      state.isLogged = !state.isLogged;
    },
    chargeFilms (state, films){
      state.films = films;
    }
  },
  actions: {
  },
  modules: {
  }
})

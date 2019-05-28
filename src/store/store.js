import Vue from 'vue';
import Vuex from 'vuex';
import wishModule from './modules/wishItem';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    someValue: '123'
  },
  mutations: {
    change(state, someValue) {
      state.someValue = someValue;
    }
  },
  getters: {
    someValue: state => state.someValue
  },
  modules: {
    wish: wishModule
  }
});

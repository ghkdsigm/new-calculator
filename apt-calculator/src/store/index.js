import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [],
    total: 0,
  },
  mutations: {
    SET_SEARCHVAL(state, payload) {
      state.items = payload;
    },
    SET_TOTAL(state, payload) {
      state.total += Number(payload);
    },
  },
  actions: {
    toggleStateUser({ commit }, payload) {
      commit('SET_SEARCHVAL', payload);
    },
    addTotal({ commit }, payload) {
      commit('SET_TOTAL', payload);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});

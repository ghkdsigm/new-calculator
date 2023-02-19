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
    SET_ADD(state, payload) {
      state.items = payload;
    },
    SET_TOTAL(state, payload) {
      state.total += Number(payload);
    },
    SET_REMOVE(state, payload) {
      state.items = payload;
    },
    SET_REMOVETOTAL(state, payload) {
      state.total -= Number(payload);
    },
  },
  actions: {
    addList({ commit }, payload) {
      commit('SET_ADD', payload);
    },
    addTotal({ commit }, payload) {
      commit('SET_TOTAL', payload);
    },
    removeList({ commit }, payload) {
      commit('SET_REMOVE', payload);
    },
    removeTotal({ commit }, payload) {
      commit('SET_REMOVETOTAL', payload);
    },
  },
  modules: {},
  plugins: [createPersistedState()],
});

import { api } from '../../boot/axios'
export default {
  namespaced: true,
  state: {
    keycloak: { authenticated: false },
  },
  mutations: {
    setKeycloak(state, keycloak) {
      state.keycloak = keycloak;
      try {
        api.interceptors.request.use((config) => {
          config.headers.common['Authorization'] = `Bearer ${keycloak.token}`;
          return config;
        });
        api.interceptors.response.use((config) => {
          if (config.status === 401) {
            keycloak.logout();
            state.keycloak = { authenticated: false };
          }
          return config;
        })
      } catch (e) {
        console.log("interceptor error", e);
      }
    }
  },
  actions: {
    setKeycloak({ commit, state, dispatch }, keycloak) {
      commit('setKeycloak', keycloak);
      dispatch('user/loadUser', {}, { root: true });
      setInterval(() => {
        keycloak.updateToken(70).then(() => { }).catch(err => {
          commit('setKeycloak', { authenticated: false });
        })
      }, 6000)
    }
  },
}

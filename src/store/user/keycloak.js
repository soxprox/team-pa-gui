import { api } from '../../boot/axios'
export default {
  namespaced: true,
  state: {
    keycloak: { authenticated: false },
  },
  mutations: {
    setKeycloak(state, keycloak) {
      state.keycloak = keycloak;

      api.interceptors.request.use((config) => {
        console.log(config)
        config.headers.common['Authorization'] = `Bearer ${keycloak.token}`;
        return config;
      });
    }
  },
  actions: {
    setKeycloak({ commit, state }, keycloak) {
      commit('setKeycloak', keycloak);
      setInterval(() => {
        keycloak.updateToken(70).then(() => {})
      }, 6000)
    }
  },
}

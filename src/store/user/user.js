import { Dark } from "quasar";
import { api } from "../../boot/axios";
export default {
  namespaced: true,
  state: {
    profile: null,
    settings: null,
  },
  mutations: {
    setUserSettings(state, settings) {
      state.settings = settings;
      Dark.set(settings.preferences.darkMode)
    },
    setUserProfile(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    async loadUserSettings({ commit }) {
        api.get('/user/settings')
          .then(({data}) => {
            commit("setUserSettings", data);
        })

    },
    loadUserProfile({ commit }) {
      api.get("/user/profile/").then(({ data }) => {
        commit("setUserProfile", profile);
      });
    },
    loadUser({ dispatch }) {
      dispatch('loadUserSettings')
      dispatch('loadUserProfile')
    },
  },
};

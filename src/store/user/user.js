import { Dark } from "quasar";
export default {
  namespaced: true,
  state: {
    settings: null,
  },
  mutations: {
    setUserSettings(state, settings) {
      state.settings = settings;
      Dark.set(settings.preferences.darkMode)
    },
  },
  actions: {
    setUserSettings({ commit }, settings) {
      commit("setUserSettings", settings);
    },
  },
};

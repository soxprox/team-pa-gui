export default {
  namespaced: true,
  state: {
    breadcrumbs: []
  },
  mutations: {
    setBreadCrumbs(state, breadcrumbs) {
      state.breadcrumbs = breadcrumbs
    }
  },
  actions: {
    setBreadCrumbs({ commit }, breadcrumbs) {
      console.log("action called")
      commit('setBreadCrumbs', breadcrumbs)
    }
  },
}

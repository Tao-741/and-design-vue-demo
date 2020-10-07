import { getHomeRoutes, getBreadCrumbList } from '@/utils/utils'
import router from '@/router'

export default {
  state: {
    userLang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'zh-CN',
    breadCrumbList: localStorage.getItem('breadCrumbList') ? JSON.parse(localStorage.getItem('breadCrumbList')) : [],
    homeRoute: getHomeRoutes(router.options.routes)
  },
  getters: {
    userLang (state, getters, rootState) {
      return rootState.app.userLang
    },
    breadCrumbList (state, getters, rootState) {
      return rootState.app.breadCrumbList
    }
  },
  mutations: {
    setUserLang (state, userLang) {
      state.userLang = userLang
      localStorage.setItem('lang', userLang)
    },
    setBreadCrumbList (state, routeMatched) {
      const breadCrumbList = getBreadCrumbList(routeMatched, state.homeRoute)
      state.breadCrumbList = breadCrumbList
      localStorage.setItem('breadCrumbList', JSON.stringify(breadCrumbList))
    }
  },
  actions: {
    setUserLanguage ({ commit }, { userLang }) {
      commit('setUserLang', userLang)
    }
  }
}

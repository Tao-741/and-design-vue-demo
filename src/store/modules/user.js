import { getLoginList } from '@/utils/utils'
import router from '@/router'

export default {
  state: {
    access: localStorage.getItem('access') ? localStorage.getItem('access') : '',
    menuList: []
  },
  getters: {
    menuList (state, getters, rootState) {
      return getLoginList(router.options.routes, rootState.user.access)
    }
  },
  mutations: {},
  actions: {}
}

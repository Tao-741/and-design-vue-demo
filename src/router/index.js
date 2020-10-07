import Vue from 'vue'
import VueRouter from 'vue-router'
import Utils from '../utils/utils'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      icon: 'setting',
      title: '登录',
      code: 'system-manage',
      hideInMenu: true,
      required: true
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/index')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    meta: {
      icon: 'setting',
      title: '系统管理',
      code: 'system-manage',
      hideInMenu: false,
      required: true
    },
    component: () => import(/* webpackChunkName: "dashboard" */ '../layout/BasicLayout'),
    children: [
      {
        path: 'dictionary',
        name: 'Dictionary',
        meta: {
          icon: 'book',
          title: '字典管理',
          hideInMenu: false,
          required: true
        },
        component: () => import('../views/system/dictionary/index')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  Utils.title(to.meta.title)
  next()
})

export default router

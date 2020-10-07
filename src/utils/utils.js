const utils = {}

// 标题
utils.title = function (title) {
  title = title || '基础架构'
  window.document.title = title
}
// 封装foreach方法
export const forEach = (arr, fn) => {
  if (!arr.length || !fn) return
  let i = -1
  const len = arr.length
  while (++i < len) {
    const item = arr[i]
    fn(item, i, arr)
  }
}
// 获取登录用户的菜单列表 access允许授权的方法
export const getLoginList = (list, access) => {
  const res = []
  forEach(list, item => {
    if (!item.meta || (item.meta && !item.meta.hideInMenu)) {
      const obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta,
        code: item.code,
        path: item.path
      }
      if (hasChild(item) && showTitleMenuEle(item, access)) {
        obj.children = getLoginList(item.children, access)
      }
      if (showTitleMenuEle(item, access)) {
        res.push(obj)
      }
    }
  })
  return res
}

// 判断是否有子菜单
export const hasChild = (item) => {
  return item.children !== undefined && item.children.length !== 0
}
// 判断用户是否有当前节点权限 access用户传的权限
export const showTitleMenuEle = (item, access) => {
  const code = item.meta.code
  console.log(code)
  return true
}
// 获取路由列表数据
export const getHomeRoutes = routers => {
  let i = -1
  const len = routers.length
  let homeRoute = {}
  while (++i < len) {
    const item = routers[i]
    if (item.children && item.children.length) {
      const res = getHomeRoutes(item.children)
      if (res.name) {
        return res
      }
    } else {
      if (item.name === 'home') {
        homeRoute = item
      }
    }
  }
  return homeRoute
}
// 获取面包屑导航的数据
export const getBreadCrumbList = (routeMatched, homeRoute) => {
  let res = routeMatched.filter(item => {
    return item.meta === undefined || !item.meta.hideInMenu
  }).map(item => {
    return {
      icon: (item.meta && item.meta.icon) || '',
      name: item.name,
      meta: item.meta
    }
  })
  res = res.filter(item => {
    return !item.meta.hideInMenu
  })
  if (homeRoute.path !== undefined) {
    return [Object.assign(homeRoute, { to: homeRoute.path }), ...res]
  } else {
    return { ...res }
  }
}
export default utils

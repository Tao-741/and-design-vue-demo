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
  const res = {}
  forEach(list, item => {
    if (item.meta || (item.meta && !item.meta.hideInMenu)) {
      const obj = {
        icon: (item.meta && item.meta.icon) || '',
        name: item.name,
        meta: item.meta,
        code: item.code,
        path: item.path
      }
      if (hasChild(item) && showTitleMenuEle(item, access)) {
        obj.children = getLoginList(list.children, access)
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
export default utils

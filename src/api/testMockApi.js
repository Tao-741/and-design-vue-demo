import { request } from '@/network'

export function getUserInfo () {
  return request({
    url: '/user/userInfo',
    method: 'GET'
  })
}

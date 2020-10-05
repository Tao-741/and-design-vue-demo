import { request } from '@/network'

export function login (params) {
  return request({
    url: '/user/login',
    params
  })
}

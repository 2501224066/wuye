var common = require('./request')

// 登录
export function login(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/authorization/login' + repair,
    data: data
  })
}

// 轮播图
export function banner(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/index/banner' + repair,
    data: data
  })
}

// 推荐服务
export function recommend(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/index/getHomeBelow' + repair,
    data: data
  })
}

// 首页 icon
export function icon(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/index/business' + repair,
    data: data
  })
}

var common = require('./request')

// 用户登录
export function userLogin(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/code/login' + repair,
    data: data
  })
}

// 工人登陆
export function workerLogin(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/login' + repair,
    data: data
  })
}

// 发送验证码
export function sendCode(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/common/send/code' + repair,
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
    url: '/business/type' + repair,
    data: data
  })
}

// 地址列表
export function addressList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-address/page' + repair,
    data: data
  })
}

// 新增地址
export function addAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-address/add' + repair,
    data: data
  })
}

// 编辑地址
export function editAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-address/update' + repair,
    data: data
  })
}

// 删除地址
export function delAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-address/del' + repair,
    data: data
  })
}

// 默认地址
export function defaultAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-address/first' + repair,
    data: data
  })
}

// 商品列表
export function goodsList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/business/getListByBusinessId' + repair,
    data: data
  })
}

// 商品详情
export function goodsDetail(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/business/detail' + repair,
    data: data
  })
}

// 商品 sku 列表
export function skuList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/business/getSku' + repair,
    data: data
  })
}

// 报修类型列表
export function repairItemList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/maintenance/list' + repair,
    data: data
  })
}

// 添加报修
export function repairAdd(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/maintenance-order/submit' + repair,
    data: data
  })
}

// 公告列表
export function noticeList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/announcement/adminList' + repair,
    data: data
  })
}

// 创建订单
export function createOrder(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/business/payOrder' + repair,
    data: data
  })
}

// 缴费列表
export function payList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/room-pay-cost/pageList' + repair,
    data: data
  })
}

// 缴费详情
export function payDetail(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/room-pay-cost/detail' + repair,
    data: data
  })
}

// 报修订单
export function reqairList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/orderList' + repair,
    data: data
  })
}

// 工人服务订单列表
export function workerServerOrderList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/orderList' + repair,
    data: data
  })
}

// 工人报修订单列表
export function workerRepairOrderList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/maintenanceOrderList' + repair,
    data: data
  })
}

// 服务订单列表
export function orderList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/unit-orders/page' + repair,
    data: data
  })
}

// 服务订单详情
export function orderDetail(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/unit-orders/detail' + repair,
    data: data
  })
}

// 优惠券列表
export function couponList(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-coupons/getUserList' + repair,
    data: data
  })
}

// 修改用户信息
export function userInfoEdit(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user/updateUserInfo' + repair,
    data: data
  })
}

// 隐私协议
export function agreement(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/system-config/getPrivacyDisclosure' + repair,
    data: data
  })
}

// 用户协议
export function userAgreement(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/system-config/getUserDisclosure' + repair,
    data: data
  })
}

// 客服信息
export function serverMan(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/system-config/getService' + repair,
    data: data
  })
}

// 工人报修订单详情
export function workerRepairOrderDetail(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/maintenanceOrderDetail' + repair,
    data: data
  })
}

// 工人服务订单详情
export function workerServerOrderDetail(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/unit-orders/detail' + repair,
    data: data
  })
}

// 维修订单已到达
export function workerRepairOrderComed(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/maintenanceOrderArrive' + repair,
    data: data
  })
}

// 服务订单已到达
export function workerServerOrderComed(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/unitOrderArrive' + repair,
    data: data
  })
}

// 维修订单设置价格
export function workerRepairOrderSetPrice(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/maintenanceOrderAddPrice' + repair,
    data: data
  })
}

// 维修订单上传服务前内容
export function workerRepairOrderBeforePost(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/maintenanceOrderBefore' + repair,
    data: data
  })
}

// 维修订单上传服务后内容
export function workerRepairOrderAfterPost(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/maintenanceOrderAfter' + repair,
    data: data
  })
}

// 服务订单上传服务前内容
export function workerServerOrderBeforePost(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/unitOrderBefore' + repair,
    data: data
  })
}

// 服务订单上传服务后内容
export function workerServerOrderAfterPost(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/workers/unitOrderAfter' + repair,
    data: data
  })
}

// 设为默认地址
export function setDefaultAddress(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/user-address/setDefault' + repair,
    data: data
  })
}

// 缴费支付
export function payPay(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/room-pay-cost/pay' + repair,
    data: data
  })
}

// 我的报修
export function myRepair(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/maintenance-order/pageList' + repair,
    data: data
  })
}

// 报修缴费
export function repairPay(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/maintenance-order/pay' + repair,
    data: data
  })
}

// 缴费图
export function repairBanner(data, repair = '') {
  return common.go({
    method: 'post',
    url: '/system-config/getRoomPayImage' + repair,
    data: data
  })
}

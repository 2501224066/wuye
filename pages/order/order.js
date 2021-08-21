import {
  orderList
} from "../../config/api"

Page({
  data: {
    tab: {
      1: "待服务",
      2: "服务中",
      3: "待验收",
      4: "已完成"
    },
    tabIndex: 1,
    list: [],
    page: 1,
    pageSize: 10
  },

  onLoad() {
    this.getOrderList()
  },

  onShow() {
    wx.$verifyLogin()
  },

  // 订单列表
  getOrderList(addStatus = false) {
    orderList({
      orderStatus: this.data.tabIndex,
      page: this.data.page,
      pageSize: this.data.pageSize
    }).then(res => {
      res.data.records.map(value => {
        return value.coverImage = [value.coverImage]
      })
      this.setData({
        list: addStatus ? this.data.list.concat(res.data.records) : res.data.records
      })
    })
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index,
      page: 1
    })
    this.getOrderList()
  },

  // 触底
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getOrderList(true)
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  },
})

import {
  payList,
  repairBanner
} from "../../config/api.js"

Page({
  data: {
    iphoneFooter: false,
    tabIndex: 0,
    tab: {
      0: '待缴记录',
      1: '缴费记录'
    },
    list: [],
    page: 1,
    pageSize: 10,
    banner: ''
  },

  onShow() {
    wx.$verifyLogin()
    this.getPayList()
    this.getBanner()
  },

  // 获取 banner
  getBanner() {
    repairBanner().then(res => {
      this.setData({
        banner: res.data.roomPayImage
      })
    })
  },

  // 缴费列表
  getPayList(addStatus = false) {
    payList({
      page: this.data.page,
      pageSize: this.data.pageSize,
      type: this.data.tabIndex
    }).then(res => {
      this.setData({
        list: addStatus ? this.data.list.concat(res.data) : res.data
      })
    })
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      page: 1,
      tabIndex: e.currentTarget.dataset.index,
      list: [],
    })
    this.getPayList()
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  },

  // 触底
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getPayList(true)
  }
})

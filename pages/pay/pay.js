import {
  payList
} from "../../config/api.js"

Page({
  data: {
    iphoneFooter: false,
    tabIndex: 0,
    tab: [
      '待缴记录',
      '缴费记录'
    ],
    list: [],
    page: 1,
    pageSize: 10
  },

  onLoad() {
    this.getPayList()
  },

  onShow() {
    wx.$verifyLogin()
  },

  // 缴费列表
  getPayList(addStatus = false) {
    return new Promise(resolve => {
      payList({
        page: this.data.page,
        pageSize: this.data.pageSize,
        type: this.data.tabIndex == 0 ? 0 : 1 // 0:未缴 1:已缴
      }).then(res => {
        this.setData({
          list: addStatus ? this.data.list.concat(res.data) : res.data
        })
        resolve()
      })
    })
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      page: 1
    })
    this.getPayList().then(res => {
      this.setData({
        tabIndex: e.currentTarget.dataset.index
      })
    })
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

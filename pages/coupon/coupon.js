import {
  couponList
} from "../../config/api"

Page({
  data: {
    tab: {
      1: "待使用",
      2: "已使用",
      3: "已失效"
    },
    tabIndex: 1,
    list: []
  },

  onLoad() {
    this.getCouponList()
  },

  // 获取优惠券列表
  getCouponList() {
    couponList({
      type: this.data.tabIndex,
    }).then(res => {
      this.setData({
        list: res.data
      })
    })
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      tabIndex: +e.currentTarget.dataset.index
    })
    this.getCouponList()
  },
})

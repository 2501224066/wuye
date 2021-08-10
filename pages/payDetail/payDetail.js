import {
  payDetail
} from "../../config/api"

Page({
  data: {
    iphoneFooter: false,
    type: 0,
    id: 0,
    detail: {}
  },

  onLoad(options) {
    this.setData({
      id: options.id,
      type: options.type,
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
    this.getDetail()
  },

  // 获取详情
  getDetail() {
    payDetail({
      roomPayCostId: this.data.id
    }).then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  // 支付
  pay() {
    wx.requestPayment({
      nonceStr: this.data.detail.vxPayData.nonceStr,
      package: this.data.detail.vxPayData.package,
      paySign: this.data.detail.vxPayData.sign,
      timeStamp: this.data.detail.vxPayData.timeStamp.toString(),
      signType: this.data.detail.vxPayData.signType,
      success(res) {
        if (res.errMsg == "requestPayment:ok") {
          wx.redirectTo({
            url: "/pages/payRes/payRes"
          })
        }
      },
      fail(res) {
        wx.showToast({
          title: "付款取消",
          icon: "loading"
        })
      }
    })
  }
})

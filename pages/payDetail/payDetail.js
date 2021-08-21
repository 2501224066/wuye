import {
  payDetail,
  payPay
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
  async pay() {
    let vxPayData = await payPay({
      roomPayCostId: this.data.id
    }).then(res => {
      return new Promise(resolve => {
        resolve(res.data.vxPayData)
      })
    })
    let that = this
    wx.requestPayment({
      nonceStr: vxPayData.nonceStr,
      package: vxPayData.package,
      paySign: vxPayData.sign,
      timeStamp: vxPayData.timeStamp.toString(),
      signType: vxPayData.signType,
      success(res) {
        if (res.errMsg == "requestPayment:ok") {
          wx.showToast({
            icon: 'success',
            title: '支付完成',
          })
          setTimeout(() => {
            that.getDetail()
          }, 1000)
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

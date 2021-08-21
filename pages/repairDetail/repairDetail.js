import {
  workerRepairOrderDetail,
  repairPay
} from "../../config/api"

Page({
  data: {
    iphoneFooter: false,
    id: 0,
    status: {
      0: {
        label: '待审核',
        img: '/images/loading.png'
      },
      1: {
        label: '待服务',
        img: '/images/loading.png'
      },
      2: {
        label: '服务中',
        img: '/images/loading.png'
      },
      3: {
        label: '待验收',
        img: '/images/loading.png'
      },
      4: {
        label: '已完成',
        img: '/images/success.png'
      }
    },
    payType: {
      0: {
        label: '待付款',
        img: '/images/wallet.png'
      },
      1: {
        label: '已付款',
        img: '/images/checkout.png'
      }
    },
    detail: {},
  },

  onLoad(options) {
    this.setData({
      phoneFooter: getApp().globalData.iphoneFooter,
      id: options.id
    })
    this.getDetail()
  },

  // 获取详情
  getDetail() {
    workerRepairOrderDetail({
      orderId: this.data.id
    }).then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  // 图片预览
  mediaShow(e) {
    wx.$showMedia(e.currentTarget.dataset.url)
  },

  // 支付
  async pay() {
    let vxPayData = await repairPay({
      maintenanceOrderId: this.data.id
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

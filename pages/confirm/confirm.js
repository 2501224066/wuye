import {
  defaultAddress,
  goodsDetail,
  skuList,
  createOrder,
  couponList
} from "../../config/api"

Page({
  data: {
    iphoneFooter: false,
    detail: {},
    sku: {},
    id: 0,
    skuId: 0,
    goods: {},
    address: null,
    comments: '',
    serviceStartTime: new Date().toISOString().substring(0, 10),
    time: new Date().toTimeString().substring(0, 5),
    payData: null,
    coupons: [],
    couponsIndex: null
  },

  onLoad(options) {
    wx.$verifyLogin()
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
      id: options.id,
      skuId: options.skuId
    })
    this.getGoodsDetail().then(res => {
      this.getCouponList()
    })
  },

  onShow() {
    this.getDefaultDddress()
  },

  // 优惠券列表
  getCouponList() {
    couponList({
      type: 1, // 待使用
    }).then(res => {
      let data = res.data.reduce((init, item) => {
        if (+item.price < this.data.goods.totalPay) {
          init.push(item)
        }
        return init
      }, [])
      this.setData({
        coupons: data
      })
    })
  },

  // 选择优惠券
  couponCheckout(e) {
    this.setData({
      couponsIndex: e.detail.value
    })
  },

  // 创建订单
  createOrder() {
    if (this.data.address == null) {
      wx.showToast({
        icon: 'loading',
        title: '请设置服务地址',
      })
      return
    }
    createOrder({
      packageBusinessId: +this.data.id,
      skuId: +this.data.skuId,
      addressId: +this.data.address.addressId,
      serviceStartTime: this.data.serviceStartTime + ' ' + this.data.time + ':00',
      comments: this.data.comments,
      useCouponsFlag: this.data.couponsIndex === null ? 0 : 1,
      couponsId: this.data.couponsIndex === null ? null : +this.data.coupons[this.data.couponsIndex].couponsId
    }).then(res => {
      this.setData({
        payData: res.data
      })
      this.pay()
    })
  },

  // 支付
  pay() {
    wx.requestPayment({
      nonceStr: this.data.payData.vxPayData.nonceStr,
      package: this.data.payData.vxPayData.package,
      paySign: this.data.payData.vxPayData.sign,
      timeStamp: this.data.payData.vxPayData.timeStamp.toString(),
      signType: this.data.payData.vxPayData.signType,
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
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value,
      searchBtnShow: e.detail.value != '' ? true : false
    })
  },

  // 拼装商品数据
  createGoods() {
    this.data.sku.forEach(element => {
      if (element.tpackageBusinessSkuId === +this.data.skuId) {
        this.setData({
          goods: {
            name: this.data.detail.name,
            coverImage: this.data.detail.coverImage,
            description: this.data.detail.description,
            totalPay: element.money
          }
        })
      }
    })
  },

  // 商品详情
  getGoodsDetail() {
    return new Promise(resolve => {
      goodsDetail({
        packageBusinessId: this.data.id
      }).then(res => {
        this.setData({
          detail: res.data
        })
        this.getSkuList()
        resolve()
      })
    })

  },

  // sku 列表
  getSkuList() {
    skuList({
      packageBusinessId: this.data.id
    }).then(res => {
      this.setData({
        sku: res.data
      })
      this.createGoods()
    })
  },

  // 获取默认地址
  getDefaultDddress() {
    defaultAddress().then(res => {
      this.setData({
        address: res.data
      })
    })
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

import {
  goodsDetail,
  skuList
} from "../../config/api"

Page({
  data: {
    iphoneFooter: false,
    skuModelShow: false,
    detail: {},
    sku: [],
    skuIndex: null,
    packageBusinessId: 0,
  },

  onLoad(options) {
    this.setData({
      packageBusinessId: options.packageBusinessId,
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
    this.getGoodsDetail()
    this.getSkuList()
  },

  onHide() {
    this.skuModelShow()
  },

  // 商品详情
  getGoodsDetail() {
    goodsDetail({
      packageBusinessId: this.data.packageBusinessId
    }).then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  // sku 列表
  getSkuList() {
    skuList({
      packageBusinessId: this.data.packageBusinessId
    }).then(res => {
      this.setData({
        sku: res.data
      })
    })
  },

  // 模态开关
  skuModelShow() {
    this.setData({
      skuModelShow: !this.data.skuModelShow
    })
  },

  // 选择服务类型
  checkoutSku(e) {
    this.setData({
      skuIndex: e.currentTarget.dataset.index
    })
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

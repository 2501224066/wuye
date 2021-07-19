Page({
  data: {
    iphoneFooter: false,
    skuModelShow: false,
    type: {
      1: "房屋打扫"
    },
    detail: {
      type: 1,
      title: '专业家政【房屋打扫】深度清洁+3小时消毒家政保洁',
      img: [
        '/images/banner.png'
      ],
      price: '288.00',
      oldPrice: "310",
      memo: "深度清洁+3小时打扫",
      more: ["/images/t.png", "/images/t.png", "/images/t.png"]
    },
    sku: [{
      price: 299.00,
      title: '经典套餐A：日常保洁3小时+1次擦玻璃',
      img: "/images/t.png"
    }, {
      price: 100.00,
      title: '经典套餐A：日常保洁3小时+1次擦玻璃',
      img: "/images/t.png"
    }],
    skuIndex: null
  },

  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },

  // 模态开关
  skuModelShow(){
    this.setData({
      skuModelShow: !this.data.skuModelShow
    })
  },

  // 选择服务类型
  checkoutSku(e) {
    this.setData({
      skuIndex: e.currentTarget.dataset.index
    })
  }

})

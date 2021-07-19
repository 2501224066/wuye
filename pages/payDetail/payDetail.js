Page({
  data: {
    iphoneFooter: false,
    type: null,
  },

  onLoad(options) {
    this.setData({
      type: options.type,
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },
})

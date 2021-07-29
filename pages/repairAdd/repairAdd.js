Page({
  data: {
    title: "保修",
    iphoneFooter: false,
  },

  onLoad(options) {
    this.setData({
      title: options.label
    })
  },

  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },
})

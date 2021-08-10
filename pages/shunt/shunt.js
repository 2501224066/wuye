Page({
  data: {

  },

  onShow() {
    this.shunt()
  },

  // 分流
  shunt() {
    if (wx.getStorageSync('userType') == 1) {
      // 用户端
      wx.switchTab({
        url: '/pages/index/index',
      })
    } else {
      // 工人端
      wx.setStorageSync('tabbarIndex', 0)
      wx.navigateTo({
        url: '/pages/workbench/workbench',
      })
    }
  }
})

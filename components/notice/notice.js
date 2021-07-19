const App = getApp();

Component({
  properties: {
    list: { // 数据
      type: JSON,
      value: []
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        navHeight: App.globalData.navHeight,
        navTop: App.globalData.navTop
      })
    }
  },
})

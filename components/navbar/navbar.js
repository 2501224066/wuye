Component({
  data: {
    navHeight: 0,
    navTop: 0
  },

  properties: {
    bgColor: { // 背景色
      type: String,
      value: '#fff'
    },
    color: { // 文字颜色
      type: String,
      value: '#2b2b2b'
    },
    text: { // 文字
      type: String,
    },
    holdon: { // 是否撑开
      type: Boolean,
      value: true
    }
  },

  lifetimes: {
    attached() {
      this.setData({
        navHeight: getApp().globalData.navHeight,
        navTop: getApp().globalData.navTop
      })
    }
  },
})

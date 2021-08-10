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
    iconColor: { // 图标颜色
      type: String,
      value: 'black'
    },
    text: { // 文字
      type: String,
    },
    holdon: { // 是否撑开
      type: Boolean,
      value: true
    },
    home: { // 返回首页
      type: Boolean,
      value: false
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

  methods: {
    // 跳转
    to(e) {
      wx.$dump(e)
    }
  }
})

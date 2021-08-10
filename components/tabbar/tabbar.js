Component({
  data: {
    iphoneFooter: false,
    tabbarIndex: 0,
    tabbar: {
      selectedColor: "#4763F4",
      color: "#dbdbdb",
      borderStyle: "white",
      list: [{
          pagePath: "/pages/workbench/workbench",
          text: "工作台",
          iconPath: "/images/menu5.png",
          selectedIconPath: "/images/menu5Sel.png"
        },
        {
          pagePath: "/pages/workerIndex/workerIndex",
          text: "我的",
          iconPath: "/images/menu4.png",
          selectedIconPath: "/images/menu4Sel.png"
        }
      ]
    }
  },
  lifetimes: {
    attached() {
      this.setData({
        tabbarIndex: wx.getStorageSync('tabbarIndex') ? wx.getStorageSync('tabbarIndex') : 0,
        iphoneFooter: getApp().globalData.iphoneFooter,
      })
    }
  },
  methods: {
    // 跳转
    to(e) {
      wx.setStorageSync('tabbarIndex', e.currentTarget.dataset.index)
      wx.$dump(e, true)
    }
  }
})

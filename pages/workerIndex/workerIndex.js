Page({
  data: {
    workerInfo: {},
    list: [{
      img: "/images/self3.png",
      label: "联系客服",
      url: "/pages/contact/contact"
    }, {
      img: "/images/self4.png",
      label: "身份切换",
      url: "/pages/login/login"
    }, {
      img: "/images/self6.png",
      label: "关于平台",
      url: "/pages/text/text?type=2"
    }, {
      img: "/images/self7.png",
      label: "隐私政策",
      url: "/pages/text/text?type=1"
    }, {
      img: "/images/self8.png",
      label: "退出登录",
      url: "/pages/login/login"
    }]
  },

  onLoad() {
    this.setData({
      workerInfo: wx.getStorageSync('workerInfo')
    })
  },

  // 跳转
  to(e) {
    // 身份切换/退出登录
    if (e.currentTarget.dataset.url == '/pages/login/login') {
      wx.removeStorageSync('loginStatus')
      wx.removeStorageSync('token')
      wx.removeStorageSync('userInfo')
      if (e.currentTarget.dataset.label == '身份切换') {
        wx.setStorageSync('userType', 1)
      }
    }
    wx.$dump(e)
  }
})

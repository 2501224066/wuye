Page({
  data: {
    title: {
      0: '登陆',
      1: '找回密码'
    },
    pwdShow: false,
    tabIndex: 0
  },

  // 切换tab
  checkoutTab() {
    this.setData({
      tabIndex: this.data.tabIndex == 1 ? 0 : 1
    })
  },

  // 密码显示
  pwdShow() {
    this.setData({
      pwdShow: !this.data.pwdShow
    })
  }

})

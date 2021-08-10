import {
  agreement,
  userAgreement
} from "../../config/api"

Page({
  data: {
    title: '公告',
    text: ''
  },

  onLoad(options) {
    // 公告
    if (options.hasOwnProperty('text')) {
      this.setData({
        text: options.text
      })
      return
    }
    // 协议
    let title = this.data.title
    if (options.type == 1) {
      title = '隐私协议'
      this.getAgreement()
    }
    if (options.type == 2) {
      title = '关于平台'
      this.getUserAgreement()
    }
    this.setData({
      title: title
    })
  },

  // 隐私协议
  getAgreement() {
    agreement().then(res => {
      this.setData({
        text: res.data.value
      })
    })
  },

  // 用户协议
  getUserAgreement() {
    userAgreement().then(res => {
      this.setData({
        text: res.data.value
      })
    })
  }
})

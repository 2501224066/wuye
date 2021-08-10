import {
  serverMan
} from "../../config/api"

Page({
  data: {
    detail: {}
  },

  onLoad() {
    this.getServerMan()
  },

  // 客服数据
  getServerMan() {
    serverMan().then(res => {
      this.setData({
        detail: res.data
      })
    })
  }
})

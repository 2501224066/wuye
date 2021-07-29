Page({
  data: {
    typeArr: {
      1: "服务和隐私声明协议"
    },
    type: 1
  },

  onLoad(options) {
    this.setData({
      type: options.type
    })
  }
})

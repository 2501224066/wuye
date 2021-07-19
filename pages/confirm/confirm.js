Page({
  data: {
    goods: {
      time: "2021-05-12 22:02",
      type: "1",
      img: "/images/t.png",
      title: "专业家政｜保洁到家",
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    },
    iphoneFooter: false,
  },

  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },
})

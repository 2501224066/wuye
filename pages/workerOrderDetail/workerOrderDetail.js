Page({
  data: {
    status: {
      1: '待服务',
      2: '服务中',
      3: '已完成'
    },
    duty: {
      1: '有责',
      0: '无责'
    },
    detail: {
      status: 1,
      title: '幸福小区路灯不亮了',
      duty: 1
    }
  },

  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },
})

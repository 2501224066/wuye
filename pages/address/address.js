Page({
  data: {
    list: [{
      name: "张三",
      phone: "18827332321",
      address: "北京大城区北部3漏291室内藕花"
    }, {
      name: "张三",
      phone: "18827332321",
      address: "北京大城区北部3漏291室内藕花"
    }, {
      name: "张三",
      phone: "18827332321",
      address: "北京大城区北部3漏291室内藕花"
    }],
    iphoneFooter: false,
  },
  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },

})

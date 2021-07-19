Page({
  data: {
    tab: ["待使用", "已使用", "已失效"],
    tabIndex: 0,
    list: [{
      label: '赠送',
      title: '20元优惠券',
      time: '2021-05-30',
    }, {
      label: '赠送',
      title: '20元优惠券',
      time: '2021-05-30',
    }]
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },
})

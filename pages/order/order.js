Page({
  data: {
    tab: ["全部", "待服务", "服务中", "已完成"],
    tabIndex: 0,
    list: [{
      time: "2021-05-12 22:02",
      type: "1",
      img: "/images/t.png",
      title: "专业家政｜保洁到家",
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    }, {
      time: "2021-05-12 22:02",
      type: "2",
      img: "/images/t.png",
      title: "专业家政｜保洁到家",
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    }, {
      time: "2021-05-12 22:02",
      type: "3",
      img: "/images/t.png",
      title: "专业家政｜保洁到家",
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    }]
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },

})

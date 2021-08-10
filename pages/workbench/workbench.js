Page({
  data: {
    icon: [{
      label: '服务订单',
      img: '/images/order1.png',
      type: 1,
    }, {
      label: '报修订单',
      img: '/images/order2.png',
      type: 2,
    }]
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

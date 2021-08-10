Page({
  data: {
    status: {
      1: '审核中',
      2: '待服务',
      3: '已完成'
    },
    type: {
      1: {
        img: '/images/repair1.png',
        title: '门窗维修'
      },
      2: {
        img: '/images/repair2.png',
        title: '家电维修'
      },
      3: {
        img: '/images/repair3.png',
        title: '门锁维修'
      },
      4: {
        img: '/images/repair4.png',
        title: '水管维修'
      },
      5: {
        img: '/images/repair5.png',
        title: '地板维修'
      }
    },
    list: [{
      time: "2021-05-12 22:02",
      type: 1,
      status: 1,
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    }, {
      time: "2021-05-12 22:02",
      type: 2,
      status: 2,
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    }, {
      time: "2021-05-12 22:02",
      type: 2,
      status: 3,
      memo: "深度清洁+专业消毒倒计3小时保洁",
      price: "288.00"
    }]
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

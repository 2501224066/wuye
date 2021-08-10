import {
  orderDetail
} from "../../config/api"

Page({
  data: {
    id: 0,
    status: {
      0: {
        label: '待支付',
        img: '/images/loading.png'
      },
      1: {
        label: '待服务',
        img: '/images/loading.png'
      },
      2: {
        label: '服务中',
        img: '/images/loading.png'
      },
      3: {
        label: '待验收',
        img: '/images/loading.png'
      },
      4: {
        label: '已完成',
        img: '/images/success.png'
      },
    },
    detail: {},
    goods: {}
  },

  onLoad(options) {
    this.setData({
      id: options.id
    })
    this.getDetail()
  },

  getDetail() {
    orderDetail({
      orderId: this.data.id
    }).then(res => {
      this.setData({
        detail: res.data,
        goods: {
          coverImage: res.data.coverImage,
          name: res.data.name,
          totalPay: res.data.totalPay
        }
      })
    })
  }
})

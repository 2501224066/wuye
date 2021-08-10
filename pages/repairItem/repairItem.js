import {
  repairItemList
} from "../../config/api"

Page({
  data: {
    list: [{
      label: '门窗报修',
      img: '/images/repair1.png',
      color: '#3553ff'
    }, {
      label: '家电报修',
      img: '/images/repair2.png',
      color: '#ff7a49'
    }, {
      label: '门锁报修',
      img: '/images/repair3.png',
      color: '#7785a2'
    }, {
      label: '水管报修',
      img: '/images/repair4.png',
      color: '#55af79'
    }, {
      label: '地板报修',
      img: '/images/repair5.png',
      color: '#f7ba56'
    }]
  },

  onLoad() {
    this.getRepairItemList()
  },

  // 类型列表
  getRepairItemList() {
    repairItemList().then(res => {
      this.setData({
        list: res.data
      })
    })
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

import {
  workerServerOrderList,
  workerRepairOrderList
} from "../../config/api"

Page({
  data: {
    text: '',
    tabIndex: 1,
    tab: {
      1: '待服务',
      2: '服务中',
      3: '待验收',
      4: '已完成',
    },
    list: [],
    type: 0,
    page: 1,
    pageSize: 10
  },

  onLoad(options) {
    this.setData({
      text: options.text,
      type: options.type
    })
    this.getData()
  },

  onShow() {
    this.getData()
  },

  // 获取数据
  getData(addStatus = false) {
    if (this.data.type == 1) {
      this.getServerOrderList(addStatus)
    } else {
      this.getRepairOrderList(addStatus)
    }
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index,
      page: 1
    })
    this.getData()
  },

  // 服务订单
  getServerOrderList(addStatus = false) {
    workerServerOrderList({
      status: +this.data.tabIndex,
      page: this.data.page,
      pageSize: this.data.pageSize
    }).then(res => {
      this.setData({
        list: addStatus ? this.data.list.concat(res.data.records) : res.data.records
      })
    })
  },

  // 报修订单
  getRepairOrderList(addStatus = false) {
    workerRepairOrderList({
      status: +this.data.tabIndex,
      page: this.data.page,
      pageSize: this.data.pageSize
    }).then(res => {
      this.setData({
        list: addStatus ? this.data.list.concat(res.data.records) : res.data.records
      })
    })
  },

  // 触底
  onReachBottom() {
    this.setData({
      page: this.data.page + 1
    })
    this.getData(true)
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

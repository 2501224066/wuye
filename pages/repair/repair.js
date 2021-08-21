import {
  myRepair
} from "../../config/api"

Page({
  data: {
    tabIndex: 0,
    status: {
      0: '待审核',
      1: '待服务',
      2: '服务中',
      3: '待验收',
      4: '已完成'
    },
    list: [],
    page: 1,
    pageSize: 10
  },

  onLoad() {
    this.getList()
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      page: 1,
      tabIndex: e.currentTarget.dataset.index
    })
    this.getList()
  },

  // 获取列表
  getList(addStatus) {
    myRepair({
      status: this.data.tabIndex,
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
    this.getList(true)
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  }
})

import {
  goodsList
} from "../../config/api"

Page({
  data: {
    list: [],
    businessId: 0,
    keyword: '',
    page: 1,
    pageSize: 10
  },

  onLoad(options) {
    if (options.hasOwnProperty('keyword')) {
      this.setData({
        keyword: options.keyword
      })
    } else {
      this.setData({
        businessId: options.businessId
      })
    }
    this.getGoodsList()
  },

  // 获取商品
  getGoodsList(addStatus = false) {
    let obj = {
      page: this.data.page,
      pageSize: this.data.pageSize,
    }
    if (this.data.businessId == 0) {
      obj.q = this.data.keyword
    } else {
      obj.businessId = this.data.businessId
    }
    goodsList(obj).then(res => {
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
    this.getAddressList(true)
  }
})

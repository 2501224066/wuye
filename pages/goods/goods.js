import {
  goodsList
} from "../../config/api"

Page({
  data: {
    list: [{
      img: "/images/t.png",
      title: "保洁到家",
      memo: "深度清洁+消毒3小时保洁",
      price: "2800.00"
    }, {
      img: "/images/t.png",
      title: "房屋打扫",
      memo: "深度清洁+消毒3小时保洁",
      price: "2800.00"
    }],
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
      obj.p = this.data.keyword
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

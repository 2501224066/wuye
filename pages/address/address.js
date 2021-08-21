import {
  addressList,
  delAddress,
  setDefaultAddress
} from "../../config/api"

Page({
  data: {
    list: [],
    iphoneFooter: false,
    page: 1,
    pageSize: 10
  },

  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
    this.getAddressList()
  },

  // 设为默认
  setDefault(e) {
    setDefaultAddress({
      addressId: e.currentTarget.dataset.id
    }).then(res => {
      wx.showToast({
        icon: "success",
        title: '设置默认成功',
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1000)
    })
  },

  // 获取地址
  getAddressList(addStatus = false) {
    addressList({
      page: this.data.page,
      pageSize: this.data.pageSize
    }).then(res => {
      this.setData({
        list: addStatus ? this.data.list.concat(res.data.records) : res.data.records
      })
    })
  },

  // 删除地址
  del(e) {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？',
      success(sm) {
        if (sm.confirm) {
          delAddress({
            addressId: e.currentTarget.dataset.id,
          }).then(() => {
            wx.showToast({
              icon: "success",
              title: '删除成功',
            })
            that.data.list.splice(e.currentTarget.dataset.index, 1)
            that.setData({
              list: that.data.list
            })
          })
        }
      }
    })
  },

  // 跳转
  to(e) {
    wx.$dump(e)
  },

  // 去编辑
  toEdit(e) {
    wx.navigateTo({
      url: '/pages/addressEdit/addressEdit?detail=' + JSON.stringify(this.data.list[e.currentTarget.dataset.index]),
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

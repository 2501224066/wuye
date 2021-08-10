import {
  addAddress,
  editAddress
} from "../../config/api"

Page({
  data: {
    addressId: 0,
    contactsName: '',
    contactsPhone: '',
    region: ['广东省', '广州市', '海珠区'],
    address: '',
    subStatus: false,
    defaultFlag: false
  },

  onLoad(options) {
    if (options.hasOwnProperty("detail")) {
      let detail = JSON.parse(options.detail)
      this.setData({
        addressId: detail.addressId,
        contactsName: detail.contactsName,
        contactsPhone: detail.contactsPhone,
        region: [detail.province, detail.city, detail.region],
        address: detail.address,
        defaultFlag: detail.defaultFlag,
        subStatus: true
      })
    }
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value,
      subStatus: (this.data.contactsName != '' && this.data.contactsPhone != '' && this.data.address != '') ? true : false
    })
  },

  // 选择地区
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },

  // 编辑地址
  edit() {
    let obj = {
      province: this.data.region[0],
      city: this.data.region[1],
      region: this.data.region[2],
      mapAddress: this.data.address,
      address: this.data.address,
      contactsName: this.data.contactsName,
      contactsPhone: this.data.contactsPhone,
      defaultFlag: this.data.defaultFlag ? 1 : 0,
    }
    if (this.data.addressId != 0) {
      obj.addressId = this.data.addressId
      // 修改
      requets = editAddress(obj).then(res => {
        wx.showToast({
          icon: "success",
          title: '设置成功',
        })
        setTimeout(() => {
          wx.navigateBack()
        }, 1000)
      })
    }
    // 新增
    addAddress(obj).then(res => {
      wx.showToast({
        icon: "success",
        title: '设置成功',
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1000)
    })
  }

})

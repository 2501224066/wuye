import {
  BASE_URL
} from '../../config/constant'

import {
  repairAdd
} from "../../config/api"

Page({
  data: {
    title: "报修",
    iphoneFooter: false,
    name: "",
    phone: "",
    address: "",
    describe: "",
    image: [],
    serviceStartTime: new Date().toISOString().substring(0, 10),
    time: new Date().toTimeString().substring(0, 5),
  },

  onLoad(options) {
    this.setData({
      title: options.label
    })
  },

  onShow() {
    this.setData({
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
  },

  // 删除图片
  del(e) {
    this.data.image.splice(this.data.image.indexOf(e.currentTarget.dataset.media), 1)
    this.setData({
      image: this.data.image
    })
  },

  // 创建
  create() {
    if (this.data.describe == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写描述',
      })
      return
    }
    if (this.data.image.lengt == 0) {
      wx.showToast({
        icon: 'loading',
        title: '请上传图片',
      })
      return
    }
    if (this.data.name == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写姓名',
      })
      return
    }
    if (this.data.phone == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写电话',
      })
      return
    }
    if (this.data.address == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写地址',
      })
      return
    }
    repairAdd({
      name: this.data.name,
      phone: this.data.phone,
      address: this.data.address,
      described: this.data.describe,
      image: this.data.image.join(),
      type: this.data.title
    }).then(res => {
      wx.showToast({
        title: '创建成功',
        icon: 'success'
      })
      setTimeout(() => {
        wx.navigateBack()
      }, 1000)
    })
  },

  // 图片预览
  mediaShow(e) {
    wx.$showMedia(e.currentTarget.dataset.url)
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value,
      searchBtnShow: e.detail.value != '' ? true : false
    })
  },

  // 选择图片
  chooseImage() {
    let that = this
    wx.chooseMedia({
      count: 9,
      mediaType: ['image', 'video'],
      sourceType: ['album', 'camera'],
      maxDuration: 30,
      camera: 'back',
      success(res) {
        res.tempFiles.forEach(element => {
          wx.uploadFile({
            url: BASE_URL + '/common/upload',
            filePath: element.tempFilePath,
            header: {
              'Authorization': wx.getStorageSync('token') || '',
            },
            name: 'file',
            success(res) {
              that.setData({
                image: that.data.image.concat(JSON.parse(res.data).data)
              })
            }
          })
        });
      }
    })
  },

})

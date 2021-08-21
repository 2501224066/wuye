import {
  workerServerOrderDetail,
  workerServerOrderComed,
  workerServerOrderAfterPost,
  workerServerOrderBeforePost
} from "../../config/api"

import {
  BASE_URL
} from '../../config/constant'

Page({
  data: {
    status: {
      1: '待服务',
      2: '服务中',
      3: '待验收',
      4: '已完成',
    },
    detail: {},
    id: 0,
    memo: '',
    imgArr: []
  },

  onLoad(options) {
    this.setData({
      id: options.id,
      iphoneFooter: getApp().globalData.iphoneFooter,
    })
    this.getDetail()
  },

  // 服务到达
  come() {
    workerServerOrderComed({
      orderId: this.data.id
    }).then(res => {
      wx.showToast({
        icon: 'success',
        title: '操作成功',
      })
      this.getDetail()
    })
  },

  // 验证内容
  verify() {
    if (this.data.imgArr.length === 0) {
      wx.showToast({
        icon: 'loading',
        title: '请上传图片',
      })
      return false
    }
    if (this.data.memo === '') {
      wx.showToast({
        icon: 'loading',
        title: '请描述服务内容',
      })
      return false
    }
    return true
  },

  // 服务前内容
  before() {
    if (!this.verify()) {
      return
    }
    workerServerOrderBeforePost({
      orderId: this.data.id,
      context: JSON.stringify({
        image: this.data.imgArr.join(),
        text: this.data.memo
      })
    }).then(res => {
      wx.showToast({
        icon: 'success',
        title: '操作成功',
      })
      this.getDetail()
    })
  },

  // 删除图片
  del(e) {
    this.data.imgArr.splice(this.data.imgArr.indexOf(e.currentTarget.dataset.media), 1)
    this.setData({
      imgArr: this.data.imgArr
    })
  },

  // 服务后内容
  after() {
    if (!this.verify()) {
      return
    }
    workerServerOrderAfterPost({
      orderId: this.data.id,
      context: JSON.stringify({
        image: this.data.imgArr.join(),
        text: this.data.memo
      })
    }).then(res => {
      wx.showToast({
        icon: 'success',
        title: '操作成功',
      })
      this.getDetail()
    })
  },

  // 上传
  upload() {
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
                imgArr: that.data.imgArr.concat(JSON.parse(res.data).data)
              })
            }
          })
        });
      }
    })
  },

  // 获取详情
  getDetail() {
    this.setData({
      memo: '',
      imgArr: []
    })
    workerServerOrderDetail({
      orderId: this.data.id
    }).then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  // 图片预览
  mediaShow(e) {
    wx.$showMedia(e.currentTarget.dataset.url)
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
  },


})

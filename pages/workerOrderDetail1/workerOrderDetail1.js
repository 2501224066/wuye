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
      this.onLoad()
    })
  },

  // 服务前内容
  before() {
    workerServerOrderBeforePost({
      orderId: this.data.id,
      context: {
        image: this.data.imgArr.join(),
        text: this.data.memo
      }
    }).then(res => {
      wx.showToast({
        icon: 'success',
        title: '操作成功',
      })
      this.onLoad()
    })
  },

  // 服务后内容
  before() {
    workerServerOrderAfterPost({
      orderId: this.data.id,
      context: {
        image: this.data.imgArr.join(),
        text: this.data.memo
      }
    }).then(res => {
      wx.showToast({
        icon: 'success',
        title: '操作成功',
      })
      this.onLoad()
    })
  },

  // 上传
  upload() {
    let that = this
    wx.chooseImage({
      success(res) {
        res.tempFilePaths.forEach(element => {
          wx.uploadFile({
            url: BASE_URL + '/common/upload',
            filePath: element,
            header: {
              'Authorization': wx.getStorageSync('token') || '',
            },
            name: 'file',
            success(res) {
              that.setData({
                imgArr: JSON.parse(res.data).data
              })
            }
          })
        });
      }
    })
  },

  // 获取详情
  getDetail() {
    workerServerOrderDetail({
      orderId: this.data.id
    }).then(res => {
      this.setData({
        detail: res.data
      })
    })
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
  },


})

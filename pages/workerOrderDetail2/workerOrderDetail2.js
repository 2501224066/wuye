import {
  workerRepairOrderDetail,
  workerRepairOrderSetPrice,
  workerRepairOrderBeforePost,
  workerRepairOrderComed,
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
    duty: {
      1: '无责',
      2: '有责'
    },
    detail: {},
    id: 0,
    money: 0,
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

  // 维修到达
  come() {
    workerRepairOrderComed({
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
    if (this.data.detail.result == 2) {
      workerRepairOrderSetPrice({
        orderId: this.data.id,
        price: this.data.money
      })
    }
    workerRepairOrderBeforePost({
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
    workerRepairOrderAfterPost({
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
    workerRepairOrderDetail({
      orderId: this.data.id
    }).then(res => {
      this.setData({
        detail: res.data,
        money: res.data.money
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

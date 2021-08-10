import {
  BASE_URL
} from '../../config/constant'

import {
  userInfoEdit
} from "../../config/api"

Page({
  data: {
    name: '',
    image: '',
    sex: 1,
    timer: null
  },

  onLoad() {
    let userInfo = wx.getStorageSync('userInfo')
    this.setData({
      name: userInfo.nickname,
      image: userInfo.portrait,
      sex: userInfo.sex
    })
  },

  onUnload() {
    let userInfo = wx.getStorageSync('userInfo')
    userInfo.nickname = this.data.name
    userInfo.portrait = this.data.image
    userInfo.sex = this.data.sex
    wx.setStorageSync('userInfo', userInfo)
  },

  // 微信授权信息
  getUserProfile() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        this.setData({
          name: res.userInfo.nickName,
          image: res.userInfo.avatarUrl,
          sex: res.userInfo.gender
        })
        this.update()
      }
    })
  },

  // 修改信息
  update() {
    if (this.data.timer) {
      clearTimeout(this.data.timer);
      this.setData({
        timer: null
      })
    }
    let timer = setTimeout(() => {
      userInfoEdit({
        name: this.data.nickName,
        image: this.data.avatarUrl,
        sex: this.data.gender
      }).then(res => {
        wx.showToast({
          icon: 'success',
          title: '修改完成',
        })
      })
    }, 1000)
    this.setData({
      timer
    })
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
    this.update()
  },

  // 设置性别
  setSex() {
    this.setData({
      sex: this.data.sex == 1 ? 2 : 1
    })
    this.update()
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
                image: JSON.parse(res.data).data
              })
              this.update()
            }
          })
        });
      }
    })
  }
})

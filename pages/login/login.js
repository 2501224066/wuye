import {
  dump
} from "../../utils/util"

import {
  login
} from "../../config/api"

Page({
  data: {
    title: {
      0: '登录',
      1: '找回密码'
    },
    pwdShow: false,
    tabIndex: 0,
    phoneDetail: {}
  },

  onLoad() {
    this.getCode()
  },

  // 获取code
  getCode() {
    let that = this
    wx.login({
      success(res) {
        that.setData({
          code: res.code
        })
      }
    })
  },

  // 获取手机号登录
  getPhoneNumber(e) {
    // 拒绝授权
    if (e.detail.errMsg != 'getPhoneNumber:ok') {
      return false
    }
    let that = this
    wx.checkSession({
      success() {
        console.log(e.detail)
        that.setData({
          phoneDetail: e
        })
        that.getUserInfo()
        // that.login()
      },
      fail() {
        that.login()
      }
    })
  },

  // 登录
  login() {
    var obj = {
      nickName: wx.setStorageSync('userInfo').nickName,
      sex: wx.setStorageSync('userInfo').nickName,
      portrait: wx.setStorageSync('userInfo').nickName,
      iv: this.data.phoneDetail.iv,
      encryptedData: this.data.phoneDetail.encryptedData,
    }
    login(obj).then(res => {
      wx.setStorageSync('token', res.data.token)
      wx.setStorageSync('loginStatus', true)
      wx.showToast({
        icon: "success",
        title: '登录成功',
        success() {
          // 分享回调
          that.shareBack()

          if (!wx.getStorageSync('authStatus')) {
            wx.navigateTo({
              url: '/pages/authorize/authorize',
            })
          } else {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }
        }
      })
    })
  },

  // 用户信息授权
  getUserInfo() {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        console.log(res)
        wx.setStorageSync('userInfo', res.userInfo)
      },
      fail(res) {
        console.log(res)
      }
    })
  },

  // 切换tab
  checkoutTab() {
    this.setData({
      tabIndex: this.data.tabIndex == 1 ? 0 : 1
    })
  },

  // 密码显示
  pwdShow() {
    this.setData({
      pwdShow: !this.data.pwdShow
    })
  },

  // 跳转
  to(e) {
    dump(e)
  }

})

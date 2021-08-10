import {
  userLogin,
  sendCode,
  workerLogin
} from "../../config/api"

Page({
  data: {
    title: {
      0: '用户登录',
      1: '工人登录'
    },
    pwdShow: false,
    tabIndex: 0,
    count: 0,
    userLogin: {
      phone: '18827335317',
      smsCode: '666666'
    },
    workerLogin: {
      account: '123456789',
      password: '123456',
    },
  },

  onLoad() {
    this.setData({
      tabIndex: wx.getStorageSync('userType') == 1 ? 0 : 1
    })
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value
    })
  },

  // 发送验证码
  sendCode() {
    if (this.data.userLogin.phone == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写手机号',
      })
      return
    }
    sendCode({
      phoneNo: this.data.userLogin.phone
    }).then(res => {
      this.setData({
        count: 60
      })
      this.wait()
      wx.showToast({
        icon: 'success',
        title: '发送成功',
      })
    })
  },

  // 验证码计时
  wait() {
    let count = this.data.count;
    var countdown = setInterval(() => {
      if (count == 0) {
        this.setData({
          count: this.data.count
        });
        clearInterval(countdown);
      } else {
        this.setData({
          count: count--
        });
      }
    }, 1000);
  },

  // 用户登陆
  userLogin() {
    if (this.data.userLogin.phone == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写手机号',
      })
      return
    }
    if (this.data.userLogin.smsCode == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写验证码',
      })
      return
    }
    this.getCode().then(res => {
      userLogin({
        smsCode: this.data.userLogin.smsCode,
        phone: this.data.userLogin.phone,
        code: res
      }).then(res => {
        wx.setStorageSync('loginStatus', true)
        wx.setStorageSync('token', res.data.token)
        wx.setStorageSync('userType', 1)
        wx.setStorageSync('userInfo', res.data)
        wx.showToast({
          icon: "success",
          title: '登陆成功',
        })
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/shunt/shunt',
          })
        }, 1000)
      })
    })
  },

  // 工人登陆
  workerLogin() {
    if (this.data.workerLogin.account == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写手机号',
      })
      return
    }
    if (this.data.workerLogin.password == '') {
      wx.showToast({
        icon: 'loading',
        title: '请填写密码',
      })
      return
    }
    workerLogin({
      phone: this.data.workerLogin.account,
      password: this.data.workerLogin.password,
    }).then(res => {
      wx.setStorageSync('loginStatus', true)
      wx.setStorageSync('token', res.data.token)
      wx.setStorageSync('userType', 2)
      wx.setStorageSync('workerInfo', res.data)
      wx.showToast({
        icon: "success",
        title: '登陆成功',
      })
      setTimeout(() => {
        wx.navigateTo({
          url: '/pages/shunt/shunt',
        })
      }, 1000)
    })
  },

  // 获取code
  getCode() {
    return new Promise(resolve => {
      wx.login({
        success(res) {
          resolve(res.code)
        }
      })
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
    wx.$dump(e)
  },

  // 禁止手动滑动
  catchTouchMove() {
    return false
  }
})

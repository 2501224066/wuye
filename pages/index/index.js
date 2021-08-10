import {
  banner,
  icon,
  recommend
} from "../../config/api"

Page({
  data: {
    banner: [],
    icon: [],
    keyword: '',
    searchBtnShow: false,
    recommend: []
  },

  onShow() {
    this.getBanner()
    this.getIcon()
    this.getRecommend()
  },

  onHide() {
    this.setData({
      keyword: ''
    })
  },

  // 修改状态
  setState(e) {
    this.setData({
      [e.currentTarget.dataset.name]: e.detail.value,
      searchBtnShow: e.detail.value != '' ? true : false
    })
  },

  // 获取推荐服务
  getRecommend() {
    recommend({
      page: 1,
      pageSize: 10
    }).then(res => {
      this.setData({
        recommend: res.data.records
      })
    })
  },

  // 获取轮播图
  getBanner() {
    banner().then(res => {
      this.setData({
        banner: res.data
      })
    })
  },

  // 获取 icon
  getIcon() {
    icon().then(res => {
      this.setData({
        icon: res.data
      })
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

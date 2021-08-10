import {
  noticeList
} from "../../config/api"

Component({
  data: {
    list: []
  },
  lifetimes: {
    attached() {
      this.setData({
        navHeight: getApp().globalData.navHeight,
        navTop: getApp().globalData.navTop
      })
      this.getNoticeList()
    }
  },
  methods: {
    // 公告
    getNoticeList() {
      noticeList({
        page: 1,
        pageSize: 10
      }).then(res => {
        this.setData({
          list: res.data.records
        })
      })
    },

    // 跳转
    to(e) {
      wx.$dump(e)
    }
  },

  // 禁止手动滑动
  catchTouchMove() {
    return false
  }
})

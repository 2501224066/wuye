import {
  dump
} from "../../utils/util"

Page({
  data: {
    iphoneFooter: false,
    notice: [
      '174****4886客户预定6月12日房屋打扫',
      '188****0001客户预定4月02日房屋打扫'
    ],
    tabIndex: 0,
    tab: [
      '待缴记录',
      '缴费记录'
    ],
    list: [{
      type: 1,
      title: "电费",
      time: "2021.01.12-2021.06.12",
      price: "286.04"
    }, {
      type: 2,
      title: "水费",
      time: "2021.01.12-2021.06.12",
      price: "286.04"
    }],
    list2: [{
      time: "2021年5月",
      arr: [{
          title: "水费",
          price: "286.04"
        },
        {
          title: "电费",
          price: "286.04"
        }
      ]
    }]
  },

  // 切换Tab
  checkoutTab(e) {
    this.setData({
      tabIndex: e.currentTarget.dataset.index
    })
  },

  // 跳转
  to(e) {
    dump(e)
  }
})

import {
  dump
} from "../../utils/util"

Page({
  data: {
    list: [{
      label: '门窗报修',
      img: '/images/repair1.png',
      color: '#3553ff'
    }, {
      label: '家电报修',
      img: '/images/repair2.png',
      color: '#ff7a49'
    }, {
      label: '门锁报修',
      img: '/images/repair3.png',
      color: '#7785a2'
    }, {
      label: '水管报修',
      img: '/images/repair4.png',
      color: '#55af79'
    }, {
      label: '地板报修',
      img: '/images/repair5.png',
      color: '#f7ba56'
    }]
  },

  // 跳转
  to(e) {
    dump(e)
  }
})

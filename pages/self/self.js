import {
  dump
} from "../../utils/util.js"

Page({
  data: {
    icon: [{
      img: "/images/self1.png",
      label: "优惠券",
      url: "/pages/coupon/coupon"
    }, {
      img: "/images/self2.png",
      label: "报修",
      url: "/pages/repair/repair"
    }],
    list: [{
      img: "/images/self3.png",
      label: "联系客服",
      url: "/pages/contact/contact"
    }, {
      img: "/images/self4.png",
      label: "身份切换",
      url: "/pages/shunt/shunt"
    }, {
      img: "/images/self5.png",
      label: "更改密码",
      url: "/pages/pwdEdit/pwdEdit"
    }, {
      img: "/images/self6.png",
      label: "关于平台",
      url: ""
    }, {
      img: "/images/self7.png",
      label: "隐私政策",
      url: ""
    }, {
      img: "/images/self8.png",
      label: "退出登陆",
      url: ""
    }]
  },

  onShow() {

  },

  // 跳转
  to(e) {
    dump(e)
  }
})

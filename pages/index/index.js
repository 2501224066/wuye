import { dump } from "../../utils/util"

Page({
  data: {
    swiper: [
      '/images/banner.png'
    ],
    notice: [
      '174****4886客户预定6月12日房屋打扫',
      '188****0001客户预定4月02日房屋打扫'
    ],
    icon: [{
      img: "/images/icon1.png",
      title: "家政保洁",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon2.png",
      title: "家电维修",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon3.png",
      title: "家电清洗",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon4.png",
      title: "搬家拉货",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon5.png",
      title: "家居安装",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon6.png",
      title: "管道疏通",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon7.png",
      title: "家居养护",
      url: "/pages/goods/goods"
    }, {
      img: "/images/icon8.png",
      title: "更多服务",
      url: "/pages/goods/goods"
    }],
    recommend: [{
      img: "/images/t.png",
      title: "保洁到家",
      memo: "深度清洁+消毒3小时保洁",
      price: "2800.00"
    }, {
      img: "/images/t.png",
      title: "房屋打扫",
      memo: "深度清洁+消毒3小时保洁",
      price: "2800.00"
    }]
  },

  onLoad() {

  },

  // 跳转
  to(e){
    dump(e)
  }
})

Component({
  properties: {
    header: { // 头
      type: Boolean
    },
    detail: { // 详情
      type: JSON,
    },
  },

  data:{
    type: {
      1: "待服务",
      2: '服务中',
      3: '已完成'
    }
  }
})

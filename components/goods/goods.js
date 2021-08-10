Component({
  properties: {
    detail: { // 详情
      type: JSON,
    },
  },
  methods: {
    // 跳转
    to(e) {
      wx.$dump(e)
    }
  }
})

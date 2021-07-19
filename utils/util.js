// 点击跳转
function dump(e) {
  // 后退
  if (!e.currentTarget.dataset.url) {
    if (getCurrentPages().length < 2) {
      wx.navigateTo({
        url: '/pages/shunt/shunt',
      })
      return
    }
    wx.navigateBack()
    return
  }
  // 前进
  wx.navigateTo({
    url: e.currentTarget.dataset.url,
  }).catch(() => {
    wx.switchTab({
      url: e.currentTarget.dataset.url,
    })
  })
}

export {
  dump
}

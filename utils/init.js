  // 初始化缓存设置
  export function initStorage() {
    wx.setStorageSync('userType', 1) // 用户类型 1.用户 2.工人    
  }

//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
   

    if(!this.globalData.userInfo) {
      wx.getUserInfo({
        success: res => {
          this.globalData.userInfo = res.userInfo;
          this.globalData.hasUserInfo = true;
        }
      })
    }
  },
  globalData: {
    userInfo: null
  }
})
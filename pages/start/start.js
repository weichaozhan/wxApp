//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  getLocation(e) {
    console.log(e)
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        let latitude = res.latitude
        let longitude = res.longitude

        wx.openLocation({
          latitude: latitude,
          longitude: longitude,
          scale: 28
        })
      }
    })
  },
  useCamera(e) {
    wx.scanCode({
      success: function(data) {
        wx.showModal({
          title: '提示',
          content: JSON.stringify(data),
          success: function (res) {
            if (res.confirm) {
              wx.showToast({
                title: '用户点击确定'
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }
    })
  }
})

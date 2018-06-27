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
    wx.request({
      url: 'https://cn.bing.com/search?q=test&qs=n&form=QBLH&sp=-1&pq=test&sc=8-4&sk=&cvid=D58AEF64EDB546ED823709BB423A9F9D',
      method: 'get',
      success: (res) => {
        console.log(res)
      }
    })
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

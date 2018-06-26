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
  }
})

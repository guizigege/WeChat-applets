Page({

  /**
   * 页面的初始数据
   */
  data: {

    //地图定位经纬度坐标
    markers:[
      {
        id: 1,
        latitude: 23.201560,
        longitude: 113.380630,
        title: "广东金融学院",
        desc: "我现在的位置"
      }
    ],

  },
  polyline: [{
    points: [{
      longitude: 113.380630,
      latitude: 23.201560
    }, {
      longitude: 113.324520,
      latitude: 23.21229
    }],
    color: "#FF0000DD",
    width: 2,
    dottedLine: true
  }],

  //导航
  reach: function (e) {
    wx.openLocation({
      latitude: 23.201560,
      longitude: 113.380630,
      scale: 18,
      name: '广东金融学院',
      address: '天河区龙洞迎福路527号'
    })
  },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
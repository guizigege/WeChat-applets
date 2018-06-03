Page({
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13682229688', //填写需要拨打的号码
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: this.data.imgalist,
      urls: this.data.scene.split(',')
      // 需要预览的图片http链接  使用split把字符串转数组。不然会报错  
    })
  },  
  previewImage2: function (e) {
    wx.previewImage({
      current: "http://www.qmcamp.com/images/webwxgetmsgimg1.jpg" ,
      urls: ["http://www.qmcamp.com/images/webwxgetmsgimg1.jpg" ]
    })
  },  
  
  /**
   * 页面的初始数据
   */
  data: {
    scene: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var scene_img = "http://www.qmcamp.com/images/companylogo.png"; //这里添加图片的地址  
    that.setData({
      scene: scene_img
    })  
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
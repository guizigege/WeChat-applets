// pages/index/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:"", //图片列表数组下标
    //图片数据列表
   imageList: [
      {
        pic: [
          { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p2.jpg", id: 1 },
          { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p4.jpg", id: 2 },
          { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p5.jpg", id: 3 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p6.jpg", id: 4 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p7.jpg", id: 5 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p12.jpg", id: 6 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p11.jpg", id: 7 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p8.jpg", id: 8 }], id: 1
      },
      {
        pic: [
          { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p2.jpg", id: 1 }, { picSrc:"http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p4.jpg",id: 2 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p5.jpg", id: 3 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p6.jpg", id: 4 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p8.jpg", id: 5 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p9.jpg", id: 6 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p10.jpg", id: 7 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p12.jpg", id: 8 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p13.jpg", id: 9 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p14.jpg", id: 10 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p16.jpg", id: 11 }], id: 2
      },
      {
        pic: [
          { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p10.jpg", id: 1 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p11.jpg", id: 2 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p12.jpg", id: 3 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p13.jpg", id: 4 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p14.jpg", id: 5 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p15.jpg", id: 6 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p16.jpg", id: 7 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p6.jpg", id: 8 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p7.jpg", id: 9 }
        ], id: 3
      },
      {
        pic: [
          { picSrc: "http://www.qmcamp.com/image/us/part1/us2.jpg", id: 1 }, { picSrc: "http://www.qmcamp.com/image/us/part1/us3.jpg", id: 2 }, { picSrc: "http://www.qmcamp.com/image/us/part1/us4.jpg", id: 3 }, { picSrc: "http://www.qmcamp.com/image/us/part1/us6.jpg", id: 4 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p11.jpg", id: 5 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p12.jpg", id: 6 }], id: 4
      },
      {
        pic: [
          { picSrc: "http://www.qmcamp.com/image/japan/japan3.jpg", id: 1 }, {picSrc:"http://www.qmcamp.com/image/japan/japan4.jpg",id:2}, { picSrc: "http://www.qmcamp.com/image/japan/japan5.jpg", id: 3 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp6.jpg", id: 4 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp19.jpg", id: 5 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp16.jpg", id: 6 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp15.jpg", id: 7 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp12.jpg", id: 8 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp8.jpg", id: 9 }, { picSrc: "http://www.qmcamp.com/image/japan/part2/jp3.jpg", id: 10 }], id: 5
      },
      {
        pic: [
          { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p10.jpg", id: 1 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p11.jpg", id: 2 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p12.jpg", id: 3 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p13.jpg", id: 4 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p14.jpg", id: 5 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p15.jpg", id: 6 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p16.jpg", id: 7 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p6.jpg", id: 8 }, { picSrc: "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p7.jpg", id: 9 }
        ], id: 3
      },
    ],
    //预览图片数组
    previewImageList: [["http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p2.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p4.jpg",
      "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p5.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p6.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p7.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p12.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p11.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p8.jpg"],
    ["http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p2.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p4.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p5.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p6.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p8.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p9.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p10.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p12.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p13.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p14.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p16.jpg",],
    ["http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p10.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p11.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p12.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p13.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p14.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p15.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p16.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p6.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p7.jpg"],
    ["http://www.qmcamp.com/image/us/part1/us2.jpg", "http://www.qmcamp.com/image/us/part1/us3.jpg", "http://www.qmcamp.com/image/us/part1/us4.jpg", "http://www.qmcamp.com/image/us/part1/us6.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p11.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p12.jpg"],
    ["http://www.qmcamp.com/image/japan/japan3.jpg", "http://www.qmcamp.com/image/japan/japan4.jpg", "http://www.qmcamp.com/image/japan/japan5.jpg", "http://www.qmcamp.com/image/japan/part2/jp6.jpg", "http://www.qmcamp.com/image/japan/part2/jp19.jpg", "http://www.qmcamp.com/image/japan/part2/jp16.jpg", "http://www.qmcamp.com/image/japan/part2/jp15.jpg", "http://www.qmcamp.com/image/japan/part2/jp12.jpg", "http://www.qmcamp.com/image/japan/part2/jp8.jpg", "http://www.qmcamp.com/image/japan/part2/jp3.jpg"],["http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p10.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p11.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p12.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p13.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p14.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p15.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p16.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p6.jpg", "http://www.qmcamp.com/other/images/chiangmai/%E5%90%88%E5%BD%B1/p7.jpg"]
    ],
  },
  // 图片预览功能函数
  previewImage: function (e) {
   var that = this;
   var index = that.data.index;
   var currentImage = e.target.dataset.src;
    console.log(e);
      wx.previewImage({
    // 当前显示图片的http链接  
    current: currentImage,
    urls: that.data.previewImageList[index]// 需要预览的图片http链接列表  
    })

  },   

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index: options.index
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
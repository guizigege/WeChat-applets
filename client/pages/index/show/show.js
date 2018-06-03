// pages/swiper/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      open: false,
      mark: "",
      newmark: "",
      index: 0,
      currentTab: 0,
      //图片数据
      showData: [
        {
           id: 1, 
           content: [{ id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E8%AF%BE%E5%A0%82%E5%AD%A6%E4%B9%A0/p3.jpg" }, { id: 2, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E8%AF%BE%E5%A0%82%E5%AD%A6%E4%B9%A0/p5.jpg" }, { id: 3, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E8%AF%BE%E5%A0%82%E5%AD%A6%E4%B9%A0/p6.jpg" }, { id: 4, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E8%AF%BE%E5%A0%82%E5%AD%A6%E4%B9%A0/p2.jpg" }], 
           title: "课程学习" ,
        }, 
        { 
          id: 2, 
          content: [{ id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%85%A5%E5%AD%A6%E6%B5%8B%E8%AF%95/p9.jpg" }, { id: 2, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%85%A5%E5%AD%A6%E6%B5%8B%E8%AF%95/p8.jpg" }, { id: 3, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%85%A5%E5%AD%A6%E6%B5%8B%E8%AF%95/p7.jpg" }, { id: 4, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%85%A5%E5%AD%A6%E6%B5%8B%E8%AF%95/p5.jpg" }], 
          title: "入学测试" ,
        }, 
        { 
          id: 3,
          content: [{ id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p2.jpg" }, { id: 2, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p8.jpg" }, { id: 3, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%8F%82%E8%A7%82%E6%B8%B8%E8%A7%88/p9.jpg" }], 
          title: "参观展览" 
        },
        { 
          id: 4, 
          content: [{ id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E4%BD%93%E8%82%B2%E8%BF%90%E5%8A%A8/p1.jpg" }, { id: 2, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E4%BD%93%E8%82%B2%E8%BF%90%E5%8A%A8/p2.jpg" }, { id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E5%BC%82%E5%9B%BD%E9%A3%8E%E5%85%89/p10.jpg" }, { id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E8%8B%B1%E4%BC%A6%E9%A3%8E%E6%83%85/p7.jpg" }], 
          title: "户外活动", 
          }, 
          { 
            id: 5,
          content: [{ id: 1, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81/p6.jpg" }, { id: 2, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81/p3.jpg" }, { id: 3, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81/p2.jpg" }, { id: 4, imageUrl: "http://www.qmcamp.com/other/images/chiangmai/%E6%96%87%E5%8C%96%E4%BA%A4%E6%B5%81/p9.jpg" }], 
          title: "文化交流" 
          }
          
            ]
  
  },
  //点击打开菜单
  tap_ch: function (e) {
      this.setData({
        open: !this.data.open
      });
    
  },
  //触摸滑动 打开或者关闭上页面
  start: function (e) {
    this.data.mark = this.data.newmark = e.touches[0].pageX;
  },
  move: function (e) {
    this.data.newmark = e.touches[0].pageX;
    if (30<this.data.newmark - this.data.mark ) {
      this.istoright = true;
    } if (this.data.mark - this.data.newmark > 30) {
      this.istoright = false;
    }
    // this.data.mark = this.data.newmark;
  },
  end: function (e) {
    this.data.mark = 0; this.data.newmark = 0;
    if (this.istoright) {
      this.setData({ open: true }); 
         } else {
            this.setData({ open: false });
             }              
          },
   drag: function(e){
     return false;
   },
   //照片渲染
   getImage: function(e){
     var that = this;
     var num = e.target.id;
      this.setData({
        index: num-1,
      });
      if (this.data.currentTab === e.target.dataset.current) {
        return false;
      } else {
        that.setData({
          currentTab: e.target.dataset.current
        })
      }
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
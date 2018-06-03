Page({
 data: {
   show1: false,
   show2: false,
  winWidth: 0,
   winHeight: 0,
   // tab切换  
   currentTab: 0,
   show: [true,false,false,false,false,false,false,false,false,false],
 },
 show1: function (e) {
   this.setData({
     show1: true,
   })
 },
  show2: function (e) {
   this.setData({
     show2: true,
   })
 },
 hidden1: function (){
   this.setData({
     show1: false
   })
 },
 hidden2: function () {
   this.setData({
     show2: false
   })
 },



  onLoad: function () {
    var that = this;

    /** 
     * 获取系统信息 
     */
    wx.getSystemInfo({

      success: function (res) {
        that.setData({
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        });
      }

    });
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {

    var that = this;
    that.setData({ currentTab: e.detail.current });

  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var showshow = [false, false, false, false, false, false, false, false, false, false];
    this.setData({
      show: showshow,
    })
    console.log(e);
    var id = e.currentTarget.dataset.current;
    for (var i = 0; i < this.data.show.length; i++) {

      if (id == i) {
        console.log(1111);
        showshow[i] = true;
        this.setData({
          show: showshow,
        })
      }

    }
  
    var that = this;

    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }


})
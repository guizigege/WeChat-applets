
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showMessage: "",
    //轮播图数据
    swiperData: {
      imgUrls: [
        { image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=280092467,106812709&fm=27&gp=0.jpg" ,id: 1},
        { image: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2564807776,2000389497&fm=200&gp=0.jpg", id: 2},
        { image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2775188832,2106095192&fm=200&gp=0.jpg", id: 3},
        { image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1740633804,1070815284&fm=200&gp=0.jpg", id: 4},
        { image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4223201256,4285806189&fm=200&gp=0.jpg", id: 5},
      ],
      autoplay: true,
      interval: 2000,
    },
    //导航栏数据
    navData: [
      {
        id: 1,
        color: "background-color:	#00008B",
        imageUrl: "../../images/navImg/new.png",
        text: "游学咨询",
        url: "consult/consult"
      },
      {
        id: 2,
        color: "background-color:#477fff",
        imageUrl: "../../images/navImg/class.png",
        text: "游学展示",
        url: "show/show"
      },
      {
        id: 3,
        color: "background-color:	#C71585",
        imageUrl: "../../images/navImg/response.png",
        text: "在线留言",
        url: "join/join"
      },
      {
        id: 4,
        color: "background-color:#DAA520",
        imageUrl: "../../images/navImg/about.png",
        text: "关于我们",
        url: "about/about"
      },
    ],
    //推荐课程数据
    recommendData: [
      {
        id: 1,
        imageUrl: "http://www.qmcamp.com/image/chiangmai/part1/cm4.jpg",
        des: "清迈夏令营",
        url: "course/qm/qm"
      },
      {
        id: 2,
        imageUrl: "http://www.qmcamp.com/image/uk/part1/uk2.jpg",
        des: "英国夏令营",
        url: "course/england/england"
      },
      {
        id: 3,
        imageUrl: "http://www.qmcamp.com/image/japan/japan2.jpg",
        des: "日本夏令营",
        url: "course/japan/japan"
      },
      {
        id: 4,
        imageUrl: "http://www.qmcamp.com/image/us/part1/us6.jpg",
        des: "美国夏令营",
        url: "course/usa/usa"
      },
      {
        id: 5,
        imageUrl: "http://www.qmcamp.com/image/nz/part1/nz4.jpg",
        des: "新西兰夏令营",
        url: "course/auckland/auckland"
      },
      {
        id: 5,
        imageUrl: "http://www.qmcamp.com/image/nz/part1/nz4.jpg",
        des: "澳洲夏令营",
        url: "course/ao/ao"
      },
    ],
    //照片墙数据
    wallImage: [{ imageUrl: "http://www.qmcamp.com/image/chiangmai/part1/cm1.jpg", des: "清迈夏令营", key: 1 }, { imageUrl: "http://www.qmcamp.com/image/uk/part1/uk4.jpg", des: "英国夏令营", key: 2 }, { imageUrl: "http://www.qmcamp.com/image/nz/part1/nz3.jpg", des: "新西兰夏令营", key: 3 }, { imageUrl: "http://www.qmcamp.com/image/us/part1/us5.jpg", des: "美国夏令营", key: 4 }, { imageUrl: "http://www.qmcamp.com/image/japan/japan6.jpg", des: "日本夏令营", key: 5 }, { imageUrl: "http://www.qmcamp.com/image/nz/part1/nz3.jpg", des: "澳洲夏令营", key: 6 }],

    //视频数据
     videoData: [{ id: 1, videoSrc: "http://220.194.236.202/1/r/q/c/f/rqcfjoarwyfibhuunzasqakjuznbhq/hc.yinyuetai.com/240C01606C56439AB8B49C982CC2BB94.mp4?sc=f0b65bba8d5ee522&br=784&vid=3115878&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/t.jpg", dec:"清迈英语夏令营",dataId:1,videoId:"video1"}, { id: 2, videoSrc: "http://220.194.236.202/7/l/n/a/l/lnaltbvcazinubdikgkmwgdzhyvpnh/hc.yinyuetai.com/C9A50160716B2571508093A1437AD8D9.mp4?sc=55fb444536aeba1d&br=789&vid=3116612&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster:"http://www.qmcamp.com/imgs/jp.jpg",dec:"日本动漫文化夏令营",dataId:2,videoId:"video2"}],
    //讯息速递数据
    messageData:[
      { id: 1, title: "2018寒假第15届泰国清迈冬令营火热报名中", time: "2017-09-16>", articleUrl: "message/article1/article1" }, { id: 2, title: "2018寒假第2届日本冬令营火热报名中", time: "2017-09-13>", articleUrl: "message/article2/article2" }, { id: 3, title: "2018第6届美国加州圣地亚哥微留学开始报名了", time: "2017-09-12>", articleUrl: "message/article3/article3"},
    ]
  },
  // 照片墙数组数据下标
  changeIndex: function (e) {
    var index = e.target.id-1;
    wx.navigateTo({
      url: 'picture/picture?index=' + index
    });
  },
  //轮播图提示点
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  //轮播图自动播放
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  
  //设置一个页面只能播放一个视频，不同时播放多个视频
  startPlay: function (e) {
    console.log(e)
    var ind = e.currentTarget.dataset.id
    if (ind == "1") {
      var v = "video" + "2"
    } else {
      var v = "video" + "1"
    }
    this.videoContext = wx.createVideoContext(v)
    this.videoContext.pause()
  },
  changeMessage: function (e) {
    var iMessage = e.target.dataset.id - 1;
    wx.navigateTo({
      url: 'message/article/article?iMessage=' + iMessage,
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求接口数据
    var that = this;
    wx.request({
      url: "https://469727100.qmcamp.com.cn/weapp/showMessage",
      data: {},
      method: 'get',
      header: { 'Content-Type': 'application/json' },  
      success: function(result){
        that.setData({
          showMessage: result.data.data
        })
      }
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


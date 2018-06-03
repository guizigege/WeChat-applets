Page({
  data: {
    //视频数据
    videoData: [{ id: 1, videoSrc: "http://112.253.22.164/3/d/z/s/w/dzswngqjzpmtghagkzdjomyqkgmibh/hc.yinyuetai.com/2CC3015A9E6F5F2FC80C8D23292E27B7.mp4?sc=cff620380072b41d&br=787&vid=2808973&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/m.jpg", dec: "美国圣地亚哥夏令营", dataId: 1, videoId: "video1" }, { id: 2, videoSrc: "http://112.253.22.158/19/q/r/u/g/qrugsofidshnptuvkftzjbaoofupqx/hc.yinyuetai.com/2B4901607D30FD96996517A2042DA7E9.mp4?sc=a9967d8d50468966&br=803&vid=3118589&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/m.jpg", dec: "美国圣地亚哥游学访学感悟", dataId: 2, videoId: "video2" }, { id: 3, videoSrc: "http://220.194.236.202/11/k/l/w/l/klwlsbumqzmpiosuusxscngqhbllrj/hc.yinyuetai.com/ADF101602978A5DA1DC7EB84A76A7C9D.mp4?sc=8090d2f5a5461c9c&br=779&vid=3106885&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/e.jpg", dec: "英国剑桥牛津双学汇夏令营", dataId: 3, videoId: "video3" }, { id: 4, videoSrc: "http://220.194.236.202/1/c/v/l/i/cvlisjihijqdjxgmfihgxichxdfvej/hc.yinyuetai.com/34A8016058053E8A2B7B19FB09BB3EAD.mp4?sc=33173b1edc71679a&br=785&vid=3113172&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/x.jpg", dec: "新西兰夏令营", dataId: 4, videoId: "video4" }, { id: 5, videoSrc: "http://112.253.22.164/5/y/y/y/l/yyyllmwvicobfgixwsjfajxfqzgxff/hc.yinyuetai.com/2296015B04CEFCB379160A28CEBDAC3D.mp4?sc=6df42179b54e9240&br=786&vid=2824629&aid=15655&area=Other&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/x.jpg", dec: "新西兰夏令营", dataId: 5, videoId: "video5" }, { id: 6, videoSrc: "http://112.253.22.164/5/f/g/m/l/fgmlendgfyfqyrpepidajophdyxqct/hc.yinyuetai.com/84E00158C9BC3B638C9016E8A7090809.mp4?sc=912ff1f52e0e3c9a&br=785&vid=2742964&aid=712&area=JP&vst=3&ptp=mv&rd=yinyuetai.com", videoPoster: "http://www.qmcamp.com/imgs/t.jpg", dec: "清迈游学精彩片花", dataId: 6, videoId: "video6" }],
  },
  // 控制一个页面只能播放一个视频，不能同时播放多个
  startPlay: function (e) {
    var arr = [1,2,3,4,5,6,7];
    var arr2 = [];
    console.log(e)
    var id = e.currentTarget.dataset.id;
    for(var i=0;i<arr.length;i++){
      if(id!=arr[i]){
        arr2.push(arr[i]);
      }
    }
    for(var i=0;i<arr2.length;i++){
      var v = "video" + arr2[i];
      this.videoContext = wx.createVideoContext(v)
      this.videoContext.pause()
    }
  },
  onLoad: function (options) {
  
  },
})
var util = require('../../../utils/util.js'); 
Page({
  data:{
    placeholder1: "请输入姓名",
    placeholder2: "请输入邮箱",
    placeholder3: "请输入手机号码",
    show1: true,
    show2: true,
    show3: true,
    show4: true,
    show5: true,
    show6: true,
    change: true,
    user: "",
    email:"",
    phone:"",
    text: "",
    tip: "",
    time: ""
   
    
  },
  //姓名栏聚焦时，placeholder为空
  focus1: function(e){
    if(e.detail.value!=""){
      this.setData({
        placeholder1: ""
      })
    }
    
    
  },
   //姓名栏失去焦点时，判断格式是否正确，显示对应提示图标
  blur1: function(e){
    var reg1 = /^[a-zA-Z ]{1,10}$/;
    var reg2 = /^[\u4e00-\u9fa5]{1,6}$/;
    var value = e.detail.value;
    if(reg1.test(value)||reg2.test(value)){
        this.setData({
          show1: false,
          show2: true,
          user: value,
          tip: ""
        })
      }else{
        this.setData({
          show1: true,
          show2: false,
          tip: "姓名只能输入中文和英文！"
          
        })
      }
      if(value == ""){
        this.setData({
          placeholder1: "姓名不能为空！"
        })
      }
    
  },
    //邮箱栏聚焦时，placeholder为空
   focus2: function (e) {
     if (e.detail.value != "") {
       this.setData({
         placeholder2: ""
       })
     }
  },
  //邮箱栏失去焦点时，判断格式是否正确，显示对应提示图标
  blur2: function(e){
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var value = e.detail.value;
    if(reg.test(value)){
          this.setData({
            show3: false,
            show4: true,
            email: value,
            tip: ""
          })
    }else{
          this.setData({
            show3: true,
            show4: false,
            tip: "邮箱格式有误！"
          })
    }
    if(e.detail.value == ""){
      this.setData({
        placeholder2: "邮箱不能为空！"
      })
    }
  },
      //手机栏聚焦时，placeholder为空
   focus3: function (e) {
     if (e.detail.value != "") {
       this.setData({
         placeholder3: ""
       })
     }
   },
   //手机号码栏失去焦点时，判断格式是否正确，显示对应提示图标
   blur3: function(e){
      var value = e.detail.value;
      var arr =value.split("");
      
     if (arr.length==11) {
       this.setData({
         show5: false,
         show6: true,
         phone: value,
         tip: ""
       })
     }else if (arr.length == 0) {
       this.setData({
         placeholder3: "手机号码不能为空！",
         show5: true,
         show6: false
       })
     }else {
         this.setData({
           show5: true,
           show6: false,
           tip: "手机号码为11位！"

         })
     }
    //判断姓名、邮箱、手机号码格式是否正确,都正确则按钮取消禁用，否则禁用
     if (this.data.show2 && this.data.show4 && this.data.show6) {
       this.setData({
         change: false
       })
     } else {
       this.setData({
         change: true
       })
     }
  
        
   },
   bindTextAreaBlur: function (e) {
     this.setData({
       text: e.detail.value
     })

   },    
   send: function (e) {
     var that = this;
     if(that.data.text==""){
       wx.showToast({

         title: "内容不能为空",
         image: "../../../images/tip.png",
         duration: 1000

       })
     }else{
       var time = util.formatTime(new Date()); 
       that.setData({
         time: time
       });   
       console.log(that.data.time);
       wx.request({
         url: "https://469727100.qmcamp.com.cn/weapp/online",
         data: {
           user: that.data.user,
           email: that.data.email,
           phone: that.data.phone,
           content: that.data.text,
           time: that.data.time
         },
         method: "POST",
         header: { "content-type": "application/x-www-form-urlencoded" },
         success: function (result) {
           wx.showToast({

             title: "提交成功！",//这里打印出登录成功

             icon: 'success',

             duration: 1000
           })
           console.log(result);
         }
       })
     }
     
    
   },
   onShow: function () {
    
   }
  
})
// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:22.740222,//变量名
    longitude:113.925176
  },
  bindcontroltap : function (e){//contorls点击绑定事件
     switch(e.controlId){
       case 1 : 
        this.movetoCenter();
        break;
       case 2 :
        wx.scanCode({//扫码方法
           success : () =>{//成功，把二维码的信息读取，发送ajax，给后台，获取密码

           },
           fail : () =>{//失败

           }
        })
              
     }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   //console.log(this);//当前页面的实例
   //这个this上面原型有setData方法可以data对象，页面初始数据，
   //调用的时候注意this指向，成功回调函数是指向success，
   //解决方面一：var self = this, 二箭头函数
     wx.getLocation({//微信小程序提供的获取经纬的接口
      // success: function(res) {//成功函数，成功返回res对象，当然也有失败函数，pc端通过ip地址定位，不是很正确，移动端通过gps，相对准确
        success : (res) =>{
            this.setData({
               latitude : res.latitude,//res.latitude,当前的纬度
               longitude : res.longitude//res.latitude,当前的经度
            })
        }
       ,
     }),
     wx.getSystemInfo({//获取设备系统信息
       success:(res)=> {
         this.setData({
           controls:[
             {
               id:1,
               iconPath: '/images/location.png',//项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径
               position:{//控件大小位置
                 width:50,
                 height:50,
                 left:20,//单位px
                 top:res.windowHeight-80
               },
               clickable:true//可点击
             },{
               id:2,
               iconPath:'/images/use.png',//引入图片
               position:{
                 width : 90,
                 height : 90,
                 top : res.windowHeight - 100,//res.windowHeight,除了导航栏的视图区域
                 left : res.windowWidth/2 -45//居中
               },
               clickable:true//可点击
             },
             {
               id : 3,
               iconPath : '/images/warn.png',
               position : {
                  width : 50,
                  height : 50,
                  top : res.windowHeight - 80,
                  left : res.windowWidth - 70
               },
               clickable : true
             },
             {
               id : 4,
               iconPath : '/images/avatar.png',
               position:{
                  width : 50,
                  height: 50,
                  top : res.windowHeight - 150,
                  left : res.windowWidth - 70
               },
               clickable : true
             },
             {
               id : 5,
               iconPath : '/images/marker.png',
               position :{
                 width : 30,
                 height : 45,
                 top : res.windowHeight/2 - 45,
                 left : res.windowWidth/2 - 15
               }
             }
             
           ]
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
  movetoCenter:function (){
    this.mapctx.moveToLocation(); //将地图中心移动到当前定位点，需要配合map组件的show-location使用
  },
  onShow: function () {
    this.mapctx = wx.createMapContext('ofo-map');//创建地图组件控制
    this.movetoCenter();//页面显示触发，还有点击定位触发
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
     console.log('onHied')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('xiala')
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
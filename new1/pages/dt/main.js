// pages/dt/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_hidden: true, //展示照片的view是否隐藏
    dt_img: '',
    dt_rgb: '',
  },

  dt_play() {
    var that = this;
    wx.canvasGetImageData({
      canvasId: 'dt',
      x: 100,
      y: 100,
      width: 3,
      height: 1,
      success:function(res){
        var rgb;
        var temp = 0;
        var length = 0;
        console.log(res.data instanceof Uint8ClampedArray)
        console.log(res.data);
        for(;length < Uint8ClampedArray.length;length++){
          rgb = Uint8ClampedArray[length];
          temp = temp + rgb;
        }
       

        that.setData({
          dt_rgb: ((temp / 5) + (temp / 4) + (temp / 3) + (temp / 2)) % 7 + 1
        });
      },
     
    })

  },


  //点击事件
  dt_choose() {
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function (res) {
        // 无论用户是从相册选择还是直接用相机拍摄，路径都是在这里面
        var filePath = res.tempFilePaths[0];
        //将刚才选的照片/拍的 放到下面view视图中
        that.setData({
          dt_img: filePath, //把照片路径存到变量中，
          img_hidden: false //让展示照片的view显示
        });
        // 这个是使用微信接口保存文件到数据库
        // wx.uploadFile({
        //   url: "",
        //   filePath: filePath,
        //   name: 'file',
        //   success: function (res) {

        //   }
        // })
      },
      fail: function (error) {
        console.error("调用本地相册文件时出错")
        console.warn(error)
      },
      complete: function () {

      }
    });
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
// pages/main/Community.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    userListInfo: [{
      icon: '../../image/the-icon.png',
      text: '班主任王老师',
      isunread: true,
      unreadNum: 2
    }, {
        icon: '../../image/the-icon.png',
        text: '科大美团外卖',
        isunread: false,
        unreadNum: 2
      }, {
        icon: '../../image/the-icon.png',
        text: '信计17级通知群',
        isunread: true,
        unreadNum: 1
      }, {
        icon: '../../image/the-icon.png',
        text: '中国诗词大会'
      }, {
        icon: '../../image/the-icon.png',
        text: '老九军'
      }, {
        icon: '../../image/the-icon.png',
        text: '西安科技大学微信小程序'
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var that = this
    // //调用应用实例的方法获取全局数据
    // app.getUserInfo(function (userInfo) {
    //   //更新数据
    //   that.setData({
    //     userInfo: userInfo
    //   })
    // })
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
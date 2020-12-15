// pages/index/index.js
const db = wx.cloud.database();
const _ = db.command;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  getInArray() {
    console.log('InArray');
    // db.command.in(array)查询指定字段的值包含在数组中的数据，对应的有 nin（意为not in）
    db.collection('user')
      .where({
        age: _.in([16, 22])
      })
      .get()
      .then(console.log)
  },
  getField() {
    console.log('field');
    // 只查询指定字段的数据
    db.collection('user')
      .field({
        username: true
      })
      .get()
      .then(console.log)
  },

  addPoint() {
    db.collection('location').add({
      data: {
        location: db.Geo.Point(100.12, 10.012)
      }
    }).then(res => {
      console.log(res);
    })
  },
  getPoint() {
    db.collection('location')
      .get()
      .then(console.log)
  },

  getFileUrl() {
    wx.cloud.getTempFileURL({
      fileList: ['cloud://dev-ee8fb8.6465-dev-ee8fb8-1258495750/me.png'],
      success: res => {
        console.log(res);
        
      }
    })
  },

  // 使用正则表达式查询
  getWithRegexp() {
    console.log('getWithRegexp');
    db.collection('user')
    .where({
      username: /^test/i
    })
    .get()
    .then(console.log)
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
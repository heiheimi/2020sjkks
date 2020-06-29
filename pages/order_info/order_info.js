// pages/order_info/order_info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    oid:0,
    goods:[],
    totalprice:0.0,
  },
  onLoad: function (options) {
    this.setData({
      oid:options.oid
    })
    wx.request({
      url: 'http://brucemarkdown.top:5000/orderinfo',
      data: { 
        oid:this.data.oid,
      },
      method:"POST",
      success: (res) => {
          console.log(res.data.data);
          if(res.data.result=='succeed'){
            this.setData({
              goods:res.data.data,
              totalprice:res.data.data[0][5]
            })
        }
        else {
          console.log(res);
          wx.hideLoading();
          wx.showToast({
            title: '查询失败',
            icon:"none"
          });
        }
      }
    });
  },
  goto_comment:function(e){
    var index=parseInt(e.currentTarget.dataset.index);
    wx.navigateTo({ //跳转到订单详情
      url: '/pages/comment/comment?gid='+this.data.order_data[index][7]+'&oid='+this.data.oid
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
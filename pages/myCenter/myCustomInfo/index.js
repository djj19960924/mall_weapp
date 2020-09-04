// pages/myCenter/myCustomInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img: "/images/nodata.png",
    customerInfo: [
      { name: "张三",idCard: "321085162523023256",status: 1 },
      { name: "李四",idCard: "324646210213154325",status: 0 },
      { name: "王五",idCard: "321424210032156875",status: 0 },
    ],
    visible: false,
    name: "",
    idCard: ""
  },

  shoModel () {
    this.setData({
      visible: true
    });
  },
  handleConfirm() {
    console.log(this.data.name,this.data.number)
  },
  handleOpen () {
    this.setData({
      visible: true
    });
  },

  handleClose () {
    this.setData({
      visible: false
    });
  },
  changeInput(event) {
    if(event.currentTarget.dataset.name==="name") this.setData({name: event.detail.detail.value});
    else if(event.currentTarget.dataset.name==="number") this.setData({number: event.detail.detail.value});
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

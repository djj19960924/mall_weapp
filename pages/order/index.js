// pages/order/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current: 1,
    typeList: [
      {
        current: 1,
        id: 1,
        name: '待付款'
      },
      {
        current: 2,
        id: 2,
        name: '待发货'
      },
      {
        current: 3,
        id: 3,
        name: '待收货'
      },
      {
        current: 4,
        id: 4,
        name: '全部'
      }
    ],
    arr: [1,23,4,1,23,43],
    orderList: [1,2,3,4,5,6,7],
    shopList: [
      { 
        id: 1,
        name: 'MCM女包复古印花logo单肩包印花单肩包MCM女包复古印花logo单肩包印花单肩包MCM女包复古印花logo单肩包印花单肩包',
        image: '../../images/shop/avatar.png',
        price: 514,
        number: 4,
        tax: 20
      },
      { 
        id: 2,
        name: 'MCM女包复古印花logo单肩包印花单肩包',
        image: '../../images/shop/avatar.png',
        price: 514,
        number: 4,
        tax: 20
      },
      { 
        id: 3,
        name: 'test3',
        image: '../../images/shop/avatar.png',
        price: 514,
        number: 4,
        tax: 20
      },
    ]
  },

  // tab切换
  handleChangeScroll({ detail }) {
    this.setData({
      current: detail.key,
      typeId: detail.key,
    }
      // , function () {
      //   wx.showLoading({
      //     title: '加载中',
      //   })
      //   requestList(pageIndex, size, news.that.data.current);
      // }
    );
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取滚动区域高度
    let query = wx.createSelectorQuery()
    wx.getSystemInfo({
      success: res => {
        query.selectAll('.box_top').boundingClientRect(rect => {
          let heightAll = 0;
          rect.map((currentValue, index, arr) => {
            heightAll = heightAll + currentValue.height
          })
          this.setData({
            scrollheight: res.windowHeight - heightAll
          },()=>{
            console.log(this.data.scrollheight)
          })
        }).exec();
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
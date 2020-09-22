// pages/tab2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curNav: 1,
    curIndex: 0,
    cateItems: [{
        id: 1,
        name: '品牌',
        subCateItems: [{
            id: 1,
            image: '../../images/tabImages/armani.png',
            name: "阿玛尼1阿玛尼1阿玛尼1阿玛尼1阿玛尼1阿玛尼1阿玛尼1"
          },
          {
            id: 2,
            image: '../../images/tabImages/armani.png',
            name: "阿玛尼2"
          },
          {
            id: 3,
            image: '../../images/tabImages/armani.png',
            name: "阿玛尼3"
          },
          {
            id: 4,
            image: '../../images/tabImages/armani.png',
            name: "阿玛尼4"
          }
        ]
      },
      {
        id: 2,
        name: '美容护肤',
        subCateItems: [{
          id: 1,
          image: '../../images/tabImages/lipstick.png',
          name: "美容护肤"
        }]
      },
      {
        id: 3,
        name: '个性彩妆',
        subCateItems: [{
          id: 1,
          image: '../../images/tabImages/lipstick.png',
          name: "个性彩妆"
        }]
      },
      {
        id: 4,
        name: '时尚箱包',
        subCateItems: [{
          id: 1,
          image: '../../images/tabImages/lipstick.png',
          name: "时尚箱包"
        }]
      },
      {
        id: 5,
        name: '项链配饰',
        subCateItems: [{
          id: 1,
          image: '../../images/tabImages/lipstick.png',
          name: "项链配饰"
        }]
      }
    ]
  },

  //事件处理函数  
  switchRightTab: function (e) {
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
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
//index.js
//获取应用实例
import { Theme } from '../../model/theme';

const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  async onLoad (options) {
    // 获取首页主题A
    //const data = await Theme.getHomeLocationA();
    //console.log(data)
  },

  // onLoad: function () {

  //   var session_key = app.globalData.session_key
  //   var openid = app.globalData.openid
  //   console.log('session_id:', session_key)
  //   console.log('openid:', openid)
    
  // },
  // getAccessToken: function () {
  //   var url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=' + 'wx5339852e4e8dd0f3' + '&secret=' + 'c3aac29d0e38f7346422dd0e20e18ab8';
  //   wx.request({
  //     url:url,
  //     success: function (res) {
  //       console.log('22:',res) // 控制台输出结果
  //     }
  //   })
  // },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    var signature = e.detail.signature
    var iv = e.detail.iv
    var rawData = e.detail.rawData
    var encryptedData = e.detail.encryptedData
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  // getUnionId: function (signature, iv, rawData, session_key, encryptedData){
  //   wx.request({
  //     url: 'http://127.0.0.1:9000/api/unionid',
  //   })
  // }
  
  ceshi() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success (res) {
        // // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFiles
        console.log(tempFilePaths[0])
      }
    })
  }

})

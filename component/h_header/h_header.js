// component/h_header/h_header.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '',
    },
    platform: {
      type: String,
      value: getApp().globalData.platform
    },
    pulltext: {
      type: String,
      value: '啊 ~ 难受 ~ 别再拉我啦 ~'
    },
    top:{ // header跟页面顶部的距离
      type:String,
      value:0
    },
    back: {
      type: Boolean,
      value: true,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    back:() => {
      wx.navigateBack({
        delta:1
      })
    }
  }
})

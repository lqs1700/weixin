import { Category } from 'category-model.js';
var category = new Category();

Page({
  data: {
    loadingHidden: false
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.titleName
    });
    console.log(this.data);
  },
  
  onLoad: function (option) {
    this.data.titleName = option.name;
    this.data.id = option.id; 
    wx.setNavigationBarTitle({
      title: option.name
    });
    this._loadData();
  },

  _loadData: function (callback) {
    var that = this;
    /*获取分类产品信息*/
    category.getProductorData(this.data.id, (data) => {
      that.setData({
        categoryInfo: data
      });
      callback && callback();
    });
  }

})
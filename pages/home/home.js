import { Home } from 'home-model.js';

var home = new Home();
Page({
  data: {
    loadingHidden: false,
    duration: 500
  },
  onLoad: function () {
    this._loadData();
  },

  /*加载所有数据*/
  _loadData: function (callback) {
    var that = this;
    // 获得bannar信息
    home.getBannerData((data) => {
      that.setData({
        bannerArr: data
      });
    });

    /*获取分类信息*/
    home.getCategoryData((data) => {
      that.setData({
        categoryArr: data
      });
    });

    /*获取主题信息*/
    home.getThemeData((data) => {
      that.setData({
        themeArr: data
      });
    });

    /*获取单品信息*/
    home.getProductorData((data) => {
      that.setData({
        productsArr: data
      });
      callback && callback();
    });
  },

  /*跳转到商品详情*/
  onProductsItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  // banner跳转到指定商品
  onBannerItemTap: function (event) {
    var id = home.getDataSet(event, 'key_word');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  // theme跳转到主题商品
  onThemeItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../theme/theme?id=' + id
    })
  },

  // theme跳转到主题商品
  onHotItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  /*跳转到分类列表*/
  onCategoryItemTap: function (event) {
    var id = home.getDataSet(event, 'id');
    var name = home.getDataSet(event, 'name');
    if (name == "车机") {
      wx.navigateTo({
        url: '../devid/devid?id=' + id + '&name=' + name
      })
    }
    else if (name == "流量充值") {
      wx.navigateTo({
        url: '../flux/flux?id=' + id + '&name=' + name
      })
    } else if (name == "保险服务") {
      wx.navigateTo({
        url: '../insurance/insurance?id=' + id + '&name=' + name
      })
    }
    else {
      wx.navigateTo({
        url: '../category/category?id=' + id + '&name=' + name
      })
    }
  },

})
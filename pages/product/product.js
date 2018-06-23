import { Product } from 'product-model.js';
var product = new Product();

Page({
  data: {

  },

  onLoad: function (option) {
    this.data.id = option.id;
    this._loadData();
  },

  _loadData: function (callback) {
    /*获取产品详情*/
    var that = this;
    var that = this;
    product.getProduct(this.data.id, (data) => {
      that.setData({
        product: data
      });
      callback && callback();
    });
  },
})
import { Devid } from 'devid-model.js';
var devid = new Devid();

Page({
  data: {
    loadingHidden: false,
    serious_id: "4",
    version_id: "1"
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

    /*获取产品系列*/
    devid.getSerious((data) => {
      that.setData({
        proSerious: data
      });
      callback && callback();
    });

    /*获取产品版本*/
    devid.getVersions((data) => {
      that.setData({
        proVersions: data
      });
      callback && callback();
    });

    /*根据版本系列获取产品*/
    var serious_id = parseInt(that.data.serious_id);
    var version_id = parseInt(that.data.version_id);

    devid.getProducts(version_id, serious_id, (data) => {
      that.setData({
        productArr: data
      });
      callback && callback();
    });
  },

  onSeriousTap: function (event) {
    var id = this.getDataSet(event, 'id');
    this.setData({
      serious_id: id
    });
    this._loadData();
  },

  onVersionTap: function (event) {
    var id = this.getDataSet(event, 'id');
    this.setData({
      version_id: id
    });
    this._loadData();
  },

  onProductDetailTap: function (event) {
    var id = this.getDataSet(event, 'id');
    wx.navigateTo({
      url: '../product/product?id=' + id
    })
  },

  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }

})
import { Insurance } from 'insurance-model.js';
var insurance = new Insurance();

Page({
  data: {
    loadingHidden: false,
  },

  onLoad: function (option) {
    this.data.id = option.id;
    this._loadData();
  },

  _loadData: function (callback) {
    var that = this;
    var insuranceId = parseInt(that.data.id);

    // 获得insurance信息
    insurance.getInsuranceData(insuranceId, (data) => {
      that.setData({
        insuranceArr: data
      });
    });
  },

  getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  },

  onInsuranceItemTap: function (event) {
    var id = this.getDataSet(event, 'id');
    this.setData({
      fluxItem: id
    });
  },

})
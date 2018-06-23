
Page({
  data: {
    loadingHidden: false,
    fluxItem:2
  },
  onLoad: function () {
    this._loadData();
  },
  _loadData(){

  },
  
  onFluxItemTap: function (event) {
    var id = this.getDataSet(event, 'id');
    this.setData({
      fluxItem: id
    });
  },

 getDataSet(event, key) {
    return event.currentTarget.dataset[key];
  }

})
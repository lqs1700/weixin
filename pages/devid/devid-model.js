import { Base } from '../../utils/base.js';

class Devid extends Base {
  constructor() {
    super();
  }

  /*产品系列*/
  getSerious(callback) {
    var param = {
      url: 'serious',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  /*获取版本*/
  getVersions(callback) {
    var param = {
      url: 'version',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

  /*商品*/
  getProducts(version_id, serious_id, callback) {
    var param = {
      url: 'product/server?version_id=' + version_id + '&&serious_id=' + serious_id,
      type: 'POST',
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Devid };
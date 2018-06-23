import { Base } from '../../utils/base.js';

class Category extends Base {
  constructor() {
    super();
  }

  /*商品*/
  getProductorData(id, callback) {
    var param = {
      url: '/product/by_category/paginate?id=' + id,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }
};

export { Category };
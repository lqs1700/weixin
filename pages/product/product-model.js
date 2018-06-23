import { Base } from '../../utils/base.js';

class Product extends Base {
  constructor() {
    super();
  }

  /*产品详情*/
  getProduct(id,callback) {
    var param = {
      url: 'product/'+id,
      sCallback: function (data) {
        callback && callback(data);
      }
    };
    this.request(param);
  }

};

export { Product };
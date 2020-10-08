const Product = require('../models/product');

class ProductService {
  constructor(db) {
    this.db = db;
  }

  /**
   * Get Product
   * @param {ObjectId} id - ObjectId
   */
  async getProduct(id) {
    return await Product.findById(id);
  }

  async createProduct(product) {
    return await Product.create(product);
  }
}

module.exports = ProductService;
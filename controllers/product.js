ObjectId = require('mongodb').ObjectID;

const createResponse = require('./_helper').createResponse;
const ProductService = require('../services/product');

const db = require('../utils/db').connect();

let productService = new ProductService(db);

/**
 * Get Product
 * @param {{
 *   pathParameters: {
 *     productId: string
 *   }
 * }} event
 * @returns {Promise<{statusCode}>}
 */
module.exports.getProduct = async event => {

  const productIdParam = event.pathParameters.productId;
  const productId = ObjectId(productIdParam);

  const response = await productService.getProduct(productId);

  if (response) {
    return createResponse(200, response);
  } else {
    return createResponse(404, `Could not find product with id: ${productId}`);
  }
};

/**
 * Create or Update Product
 * @param {{
 *   pathParameters: {
 *     productId: string
 *   }
 * }} event
 * @returns {Promise<{statusCode}>}
 */
module.exports.createProduct = async event => {

  const productIdParam = event.pathParameters.productId;
  const productId = ObjectId(productIdParam);

  const request = JSON.parse(event.body);

  const product = {
    name: request.name
  }

  const response = await productService.createProduct(product);
};
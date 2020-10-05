
'use strict';
const createResponse = require('./_helper').createResponse;
const FooService = require('../services/foo');

const db = require('../utils/db').connect();

let fooService = new FooService(db);

/**
 * Get Foo
 * @param {{
 *   pathParameters: {
 *     fooId: string
 *   }
 * }} event
 * @returns {Promise<{statusCode}>}
 */
module.exports.getFoo = async event => {

  const fooId = event.pathParameters.fooId;

  const response = await fooService.getFoo(fooId);

  if (response) {
    return createResponse(200, response);
  } else {
    return createResponse(404, `Could not find foo with id: ${fooId}`);
  }
};
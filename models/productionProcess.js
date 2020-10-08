const mongoose = require('mongoose');

const productionProcessSchema = new mongoose.Schema({
  name: 'string',
  summary: 'string',
  steps: [{
    name: 'string',
    description: 'string',
    duration: 'string'
  }],
  byproducts: [{
    byproduct: 'string'
  }],
  mediaElements: [{
    name: 'string',
    uri: 'string'
  }]

});

const productionProcess = mongoose.model('ProductionProcess', productionProcessSchema);

module.exports = productionProcess;
const mongoose = require('mongoose');

const variationSchema = new mongoose.Schema({
  name: {type: 'string', required: true},
  description: 'string',
  variants: [{
    value: 'string'
  }]
})

const productSchema = new mongoose.Schema({
  name: 'string',
  specificName: 'string',
  summary: 'string',
  mediaElements: [{
    url: 'string'
  }],
  variations: [{
    variationSchema
  }],
  alternatives: [{}],
  sizes: [{
    units: 'string',
    mostCommon: 'string',
    sizes: [{
      name: 'string',
      value: 'number',
      servings: 'number',
      specs: {
        dimensions: {
          units: 'string',
          height: 'number',
          width: 'number',
          depth: 'number',
        },
        weight: {
          units: 'string',
          value: 'number'
        }
      }
    }]
  }],
  prices: [{
    sizeRef: 'string',
    variationRef: 'string',
    price: {
      denomination: 'string',
      value: 'number'
    }
  }],
  relatedItems: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Product'},
  ],
  productionProcesses: [{
    standard: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductionProcess'}],
    diy: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductionProcess'}]
  }],
  history: 'string',
  externalLinks: [{
    name: 'string',
    uri: 'string'
  }]
});

const product = mongoose.model('Product', productSchema);

module.exports = product;
const mongoose = require('mongoose');

const format = {
  bar: 'number', 
  baz: 'string'
}

const schema = new mongoose.Schema(format);

const foo = mongoose.model('Foo', schema);

module.exports = foo;
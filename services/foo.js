const Foo = require('../models/foo');

class FooService {
  constructor(db) {
    this.db = db;
  }

  async getFoo(id) {
    return await Foo.findOne({id: id});
  }
}

module.exports = FooService;
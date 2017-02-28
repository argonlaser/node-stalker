var stalk = require('../lib/index')
var assert = require('assert')

describe('#Log the stalked file, function and line', function () {
    it('should log the stalked file, function and line', function () {
      stalk(1, 2, 3, 4);
  })
})

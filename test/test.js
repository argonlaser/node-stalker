var stalk = require('../lib/index')
var assert = require('assert')

describe('#Log the stalked file, function and line', function () {
    it('#log numbers', function () {
      stalk(1, 2, 3, 4);
    })

    it('#log with no arguments', function () {
      stalk();
    })

    it('#log with string', function () {
      stalk('hello world');
    })
})

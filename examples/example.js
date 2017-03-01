var stalk = require('../lib/index.js')

function example () {
  /*
   * Some lines of code
   */
  stalk(1, 2, 3, 4)
  stalk()
  stalk(JSON.stringify({a: 1, b: 2}), [2, 3, 4, 5, 6])
  stalk('hello world')
  /*
   * Some lines of code
   */
}

example()

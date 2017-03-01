var stackTrace = require('stack-trace')

function stalk () {
  var output = ''

  output += 'FILE: ' + stackTrace.get()[1].getFileName() + ' | '
  output += 'FUNC: ' + (stackTrace.get()[1].getFunctionName() || 'Not in function') + ' | '
  output += 'LINE: ' + stackTrace.get()[1].getLineNumber() + ' | '

  for (var i = 0; i < arguments.length; i++) {
    output += arguments[i] + ' | '
  }

// Disable logging while running tests
  if (process.env.npm_lifecycle_event !== 'test') {
    console.log(output)
  }
}

module.exports = stalk

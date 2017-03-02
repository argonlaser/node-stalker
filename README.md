<h1>Node-Stalker</h1>
Node-Stalker is a tiny nodejs library that stalks your code and helps you debug.

Install
===========
```
npm install --save-dev node-stalker
```

Why node-stalker?
==============
1) It is tiny and easy to log. <br/>
2) It can be used to log current file, function and line with ease.<br/>
3) It can log additional optional variables passed to it. <br />
4) It can save same developer efforts while tracking down the code workflow. <br />
5) It works in browser as well. <br />

Usage
=======
```
var stalk = require('node-stalker');

stalk()
```
Examples
=======
[example.js](https://github.com/argonlaser/node-stalker/blob/master/examples/example.js)

To run the example, give:
```
node examples/example.js
```

Thanks
=========
[Stack-trace](https://www.npmjs.com/package/stack-trace)

Thanks for checking out the package. Feel free to open an issue or submit a PR !

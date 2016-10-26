# Step 1

create webpack.config.js

```javascript
var path = require('path')

module.exports = {
  // your mainly entry file path
  entry: './src/index.js',
  output: {
    // output compile file to build/bundle.js
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        // find all dependencies which you require .json in it
        test: /\.json$/,
        /*
         When installed 'json-loader' then below line change into loader: 'json-loader'
         */
        loader: '../index.js'
      }
    ]
  }
}
```

# Step 2

run `webpack`

```command
Hash: 7d4e96306aad36c5e772
Version: webpack 2.1.0-beta.25
Time: 78ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.69 kB       0  [emitted]  main
   [0] ./file/person.json 98 bytes {0} [built]
   [1] ./src/index.js 92 bytes {0} [built]
```

# Step 3

create `src/index.js` file and type script

```javascript
var person = require('../file/person.json')
```

# Step 4

see `build/bundle.js` json file compiled as json parsed object and export itself

```javascript
[
/* 0 */
/***/ function(module, exports) {

module.exports = {"name":"Webpack-JSON-loader","github":"https://github.com/webpack/json-loader"};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

/* run command line 'webpack' in this folder */
var person = __webpack_require__(0)


/***/ }
/******/ ]
```

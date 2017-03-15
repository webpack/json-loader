/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    var value = typeof source === "string" ? JSON.parse(source) : source;
    var options = loaderUtils.getOptions(this) || {};
    value = JSON.stringify(value)
    value = options.stringify ? `'${value}'` : value
    var module = this.version && this.version >= 2 ? `export default ${value};` : `module.exports = ${value};`;
    return module
}

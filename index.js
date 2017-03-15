/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    var value = typeof source === "string" ? JSON.parse(source) : source;
    this.value = [value];
    var query = loaderUtils.getOptions(this) || {};
    var outprefix = this.version && this.version >= 2 ? "export default " : "module.exports = ";
    var out = JSON.stringify(value);
    return outprefix + (query.stringify ? "'" + out + "'" : out) + ";";
}

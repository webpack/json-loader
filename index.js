/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
var loaderUtils = require('loader-utils');

module.exports = function(source) {
    this.cacheable && this.cacheable();    
    var value = typeof source === "string" ? JSON.parse(source) : source;
    this.value = [value];
    var query = loaderUtils.getOptions(this) || {}
    if(query.string)
	return "module.exports = `" + JSON.stringify(value) + "`;";
    return "module.exports = " + JSON.stringify(value) + ";";
}

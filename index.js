/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(source) {
        JSON.minify = require("node-json-minify");

	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(JSON.minify(source)) : source;
	this.value = [value];
	return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
}

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	if (typeof source === "string" && source.indexOf("module.exports = ") === 0) {
        	return source;
    	}
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];
	return "module.exports = " + JSON.stringify(value) + ";";
}

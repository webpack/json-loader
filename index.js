/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(source) {
	this.cacheable && this.cacheable();
	var value = typeof source === "string" ? JSON.parse(source) : source;
	this.value = [value];
	return "export default " + JSON.stringify(value) + ";";
}

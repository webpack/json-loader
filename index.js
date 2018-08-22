const jsesc = require('jsesc');

module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  var value = typeof source === "string" ? JSON.parse(source) : source;

  value = JSON.stringify(value);
  value = jsesc(value);

  return `module.exports = ${value}`;
}

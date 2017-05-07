/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
import loaderUtils from 'loader-utils';

export default function (source) {
  let value = typeof source === 'string' ? JSON.parse(source) : source;
  const options = loaderUtils.getOptions(this) || {};
  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
  value = options.stringify ? `'${value}'` : value;
  const module = this.version && this.version >= 2 ? `export default ${value};` : `module.exports = ${value};`;
  return module;
}

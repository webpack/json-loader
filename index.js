module.exports = function (source) {
  if (this.cacheable) this.cacheable();

  var value = typeof source === "string" ? JSON.parse(source) : source;
  var keys;
  try {
    keys = Object.keys(value)
  } catch (e) {
    // isn't an object
  }
  var tmpName = '__json_loader_tmp';
  if (keys) {
    keys = keys.filter(isLegalId).map(function (key) {
      return `export var ${key} = ${tmpName}.${key};`
    });
  }
  value = JSON.stringify(value)
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

  return `var ${tmpName} = ${value};
  ${keys.length ? keys.join('\n') : ''}
  export default ${tmpName};
  `;
}
// from https://github.com/rollup/rollup-pluginutils/blob/1387dd324c5e23fd5aee40f7949268505c0e555a/src/makeLegalIdentifier.js
var reservedWords = 'break case class catch const continue debugger default delete do else export extends finally for function if import in instanceof let new return super switch this throw try typeof var void while with yield enum await implements package protected static interface private public arguments Infinity NaN undefined null true false eval uneval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Symbol Error EvalError InternalError RangeError ReferenceError SyntaxError TypeError URIError Number Math Date String RegExp Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array Map Set WeakMap WeakSet SIMD ArrayBuffer DataView JSON Promise Generator GeneratorFunction Reflect Proxy Intl'.split( ' ' );
function isLegalId(name) {
  if (reservedWords.indexOf(name) > -1) {
    return false;
  }
  if (name.match(/^[^a-zA-Z_$]/)) {
    return false;
  }
  if (name.match(/\W/)) {
    return false;
  }
  return true;
}

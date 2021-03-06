
/**
* Parse the given x-www-form-urlencoded `str`.
*
* @param {String} str
* @return {Object}
* @api private
*/

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var parts;
  var pair;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    parts = pair.split('=');
    obj[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
  }

  return obj;
}

/**
* Default parsers.
*
*     superagent.parse['application/xml'] = function(str){
*       return { object parsed from str };
*     };
*
*/

parseString.types = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};

module.exports = parseString;

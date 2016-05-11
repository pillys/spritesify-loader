'use strict';
var sprites = require('spritesify');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);
  sprites(query.spritesPath, false, query.urlFix, function(err, data) {
    if (err) {
      return callback(err);
    } else {
      callback(null, data + source);
    }
  });
};
'use strict';
var Spritesify = require('spritesify');
var loaderUtils = require('loader-utils');

module.exports = function(source) {
  var callback = this.async();
  var query = loaderUtils.parseQuery(this.query);
  var spritesify = new Spritesify(query.spritesPath, query.urlFix);
  spritesify.css(query.distPath, function(err, data) {
    if(err) {
      callback(err);
    } else {
      callback(null, data + source);
    }
  });
};
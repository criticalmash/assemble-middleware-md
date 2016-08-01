/**
 * assemble-middleware-md: Markdown middleware for
 * assemble.js
 * https://github.com/criticalmash/assemble-middleware-md
 * 
 * Copyright (c) 2016 John O'Donnell (Critical Mash).
 * Licensed under the MIT license.
 */

'use strict';

var Remarkable = require('remarkable');

function markdownMid(options) {
  options = options || {};
  var md = new Remarkable(options);
  return function (view, next) {
    if (typeof next !== 'function') {
      throw new TypeError('expected a callback function');
    }
    view.contents = md.render(view.contents.toString());
    next(null, view);
  };
}



module.exports = markdownMid;

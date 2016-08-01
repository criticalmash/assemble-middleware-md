'use strict';

/**
 * tests for assemble-middleware-md
 */

var chai = require('chai');
var expect = chai.expect;
var assemble = require('assemble');
var app;

var markdownMid = require('../');

describe('middleware', function () {
  beforeEach(function () {
    app = assemble();
    if (!app.pages) {
      app.create('pages');
    }
  });

  it('should exist', function () {
    expect(markdownMid).to.be.an('function');
  });

  it('should process markdown code', function() {
    app.pages.onLoad(/\.md$/, markdownMid());
    app.pages('test/inputs/simple.md');

    var page = app.pages.getView('simple.md');
    // console.log('page', page.contents.toString());
    expect(page.contents.toString()).to.equal('<h1>A simple header</h1>\n');
  });

  it('should pass options to remarkable', function() {
    app.pages.onLoad(/\.md$/, markdownMid({linkify: true}));
    app.pages('test/inputs/link.md');

    var page = app.pages.getView('link.md');
    // console.log('page', page.contents.toString());
    expect(page.contents.toString()).to.equal('<p>abc <a href="https://github.com/jonschlinkert/remarkable">https://github.com/jonschlinkert/remarkable</a> xyz</p>\n');
  });

  it('should ignore other file types', function () {
    app.pages.onLoad(/\.md$/, markdownMid());
    app.pages('test/inputs/index.html');

    var page = app.pages.getView('index.html');
    // console.log('page', page.contents.toString());
    expect(page.contents.toString()).to.equal('# not a header\n');
  });

});
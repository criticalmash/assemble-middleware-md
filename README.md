# assemble-middleware-md
Assemble Middleware to parse markdown files. Uses Remarkable.

The [markdown helper](https://github.com/assemble/assemble/blob/master/support/docs/src/content/recipes/markdown-to-html.md) technique is useful when all the pages in your site/collection are written in markdown, but can cause issues when your pages are a collection of different formats.

For example, your homepage might have a complicated layout that is easier to implement using *handlebars*, but you'd like to use *markdown* on interior pages that are simpler.

This middleware attaches to your app's `onLoad` event and only parses `.md` files allowing you to use the the file format best suited for a page's particular case.

This middleware uses [Remarkable](https://www.npmjs.com/package/remarkable) the same library at the heart of [helper-markdown](https://www.npmjs.com/package/helper-markdown)


## Install
With npm

```sh
npm i assemble-middleware-md --save
```

## Use

```js
var markdownMid = require('assemble-middleware-md');

app.pages.onLoad(/\.md$/, markdownMid());
```

Now, any page with the `.md` extension will be processed as markdown when loaded while other file types are skipped.

Like *helper-markdown* you can also pass in an options object.

```js
app.pages.onLoad(/\.md$/, markdownMid({linkify: true}));
```
See [Remarkable's README](https://github.com/jonschlinkert/remarkable) for a complete list of options.

## Tests

```sh
mocha test/*-spec.js
```

## Release History
### v0.1.0
Beta release

## Contributing and Issues
Feel free to submit issues or pull requests for [assemble-middleware-md](https://github.com/criticalmash/assemble-middleware-md/issues). Questions on use can also be submitted to the issue queue.


## License
© 2016 John O'Donnell (Critical Mash Inc.) Released under the [MIT license](https://github.com/criticalmash/assemble-middleware-md/blob/master/LICENSE).

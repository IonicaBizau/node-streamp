
# streamp

 [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![AMA](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/streamp.svg)](https://www.npmjs.com/package/streamp) [![Downloads](https://img.shields.io/npm/dt/streamp.svg)](https://www.npmjs.com/package/streamp) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> mkdir -p combined with streams.

## :cloud: Installation

```sh
$ npm i --save streamp
```


## :clipboard: Example



```js
// Dependencies
var Streamp = require("streamp");

// Constants
const PATH = __dirname + "/long/path/to/foo.txt";

// Create writable stream
var bar = new Streamp.writable(PATH);
bar.write(new Date().toString() + "\n");
bar.end();

// Create readable stream
var foo = new Streamp.readable(PATH);
foo.pipe(process.stdout);
```

## :memo: Documentation


### `readable(options)`
Creates a readable stream in the specified path (which will be created if doesn't exist).

#### Params
- **String|Object** `options`: The path to the file or an object containing the following fields:
 - `path` (String): The file path.
 - `flags` (String): The stream flags (default: `"a"`).
 - `options` (Object): Additional options which are passed when the stream is created.

#### Return
- **Stream** The readable stream that was created.

### `writable(options)`
Creates a writable stream in the specified path (which will be created if doesn't exist).

#### Params
- **String|Object** `options`: The path to the file or an object containing the following fields:
 - `path` (String): The file path.
 - `flags` (String): The stream flags (default: `"a"`).
 - `options` (Object): Additional options which are passed when the stream is created.

#### Return
- **Stream** The writable stream that was created.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`github-colors`](https://github.com/IonicaBizau/github-colors)—GitHub colors and file extensions mapping
 - [`kindly-license`](https://github.com/IonicaBizau/kindly-license)—A human readable license for projects created by human-beings.
 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

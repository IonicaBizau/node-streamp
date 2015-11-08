# streamp [![Support this project][donate-now]][paypal-donations]

mkdir -p combined with streams.

## Installation

```sh
$ npm i streamp
```

## Example

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

## Documentation

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

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`blah`](https://github.com/IonicaBizau/blah)

 - [`github-colors`](https://github.com/IonicaBizau/github-colors)

 - [`kindly-license`](https://github.com/IonicaBizau/kindly-license)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
# streamp
`mkdir -p` combined with streams.

## Installation

```sh
$ npm install streamp
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
1. File an issue in the repository, using the bug tracker, describing the
   contribution you'd like to make. This will help us to get you started on the
   right foot.
2. Fork the project in your account and create a new branch:
   `your-great-feature`.
3. Commit your changes in that branch.
4. Open a pull request, and reference the initial issue in the pull request
   message.

## License
See the [LICENSE](./LICENSE) file.

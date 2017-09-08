## Documentation

You can see below the API reference of this module.

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


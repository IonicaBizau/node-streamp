"use strict"

// Dependencies
const Fs = require("fs")
    , Ul = require("ul")
    , mkdirp = require("mkdirp")
    , Path = require("path")

/*!
 * prepareOptions
 * Prepare the options.
 *
 * @name prepareOptions
 * @function
 * @param {Object} options The options that were provided.
 */
function prepareOptions(options) {
    if (typeof options === "string") {
        options = { path: options }
    }

    if (this._type === "writable") {
        options = Ul.merge(options, {
            flags: "a"
        })
    }

    this.options = options
}

/*!
 * createStream
 * Creates the stream.
 *
 * @name createStream
 * @function
 * @param {String} func The `Fs` method.
 * @return {Stream} The created stream.
 */
function createStream(func) {
    const dir = Path.dirname(this.options.path)
    mkdirp.sync(dir)
    return Fs[func](this.options.path, Ul.deepMerge(
        {}
      , this.options.options
      , { flags: this.options.flags }
    ))
}

// Constructor
const Streamp = module.exports = {}

/**
 * readable
 * Creates a readable stream in the specified path (which will be created if doesn't exist).
 *
 * @name readable
 * @function
 * @param {String|Object} options The path to the file or an object containing the following fields:
 *
 *  - `path` (String): The file path.
 *  - `flags` (String): The stream flags (default: `"a"`).
 *  - `options` (Object): Additional options which are passed when the stream is created.
 *
 * @return {Stream} The readable stream that was created.
 */
Streamp.readable = function (options) {
    this._type = "readable"
    prepareOptions.call(this, options)
    return createStream.call(this, "createReadStream")
}

/**
 * writable
 * Creates a writable stream in the specified path (which will be created if doesn't exist).
 *
 * @name writable
 * @function
 * @param {String|Object} options The path to the file or an object containing the following fields:
 *
 *  - `path` (String): The file path.
 *  - `flags` (String): The stream flags (default: `"a"`).
 *  - `options` (Object): Additional options which are passed when the stream is created.
 *
 * @return {Stream} The writable stream that was created.
 */
Streamp.writable = function (options) {
    this._type = "writable"
    prepareOptions.call(this, options)
    return createStream.call(this, "createWriteStream")
}

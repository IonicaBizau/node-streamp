// Dependencies
const Streamp = require("../lib")

// Constants
const PATH = __dirname + "/long/path/to/foo.txt"

// Create writable stream
const bar = new Streamp.writable(PATH)
bar.write(new Date().toString() + "\n")
bar.end()

// Create readable stream
const foo = new Streamp.readable(PATH)
foo.pipe(process.stdout)

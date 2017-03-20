
# streamp

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Version](https://img.shields.io/npm/v/streamp.svg)](https://www.npmjs.com/package/streamp) [![Downloads](https://img.shields.io/npm/dt/streamp.svg)](https://www.npmjs.com/package/streamp)

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


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`3abn`](https://github.com/IonicaBizau/3abn#readme)—A 3ABN radio client in the terminal.
 - [`blah`](https://github.com/IonicaBizau/blah)—A command line tool to optimize the repetitive actions.
 - [`github-colors`](https://github.com/IonicaBizau/github-colors)—GitHub colors and file extensions mapping
 - [`kindly-license`](https://github.com/IonicaBizau/kindly-license)—A human readable license for projects created by human-beings.
 - [`np-init`](https://github.com/IonicaBizau/np-init#readme)—Easily start a npm package from scratch.
 - [`rucksack`](https://github.com/IonicaBizau/rucksack-new#readme)—JavaScript and CSS bundler.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md

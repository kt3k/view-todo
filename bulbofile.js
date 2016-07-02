'use strict'

const bulbo = require('bulbo')
const asset = bulbo.asset
const through2 = require('through2')
const browserify = require('browserify')

asset('src/site/index.html')

asset('src/site/js/index.js')
.base('src/site')
.pipe(through2.obj(function (file, enc, callback) {
  file.contents = browserify(file.path).transform('babelify').bundle()
  this.push(file)
  callback()
}))

asset('src/site/css/**/*').base('src/site')
asset('src/site/img/**/*').base('src/site')
asset('src/site/fonts/**/*').base('src/site')
asset('src/site/favicon.ico').base('src/site')

bulbo.dest('site')

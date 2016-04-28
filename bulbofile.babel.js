import {asset, dest} from 'bulbo'
import through2 from 'through2'
import browserify from 'browserify'

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
asset('src/site/favicon.ico').base('src/site')

dest('site')

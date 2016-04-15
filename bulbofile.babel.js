import {asset, dest} from 'bulbo'
import through from 'through'
import browserify from 'browserify'

asset('src/site/index.html')

asset('src/site/js/index.js')
.base('src/site')
.pipe(through(function (file) {
  file.contents = browserify(file.path).transform('babelify').bundle()
  this.queue(file)
}))

asset('src/site/css/**/*').base('src/site')
asset('src/site/img/**/*').base('src/site')
asset('src/site/favicon.ico').base('src/site')

dest('site')

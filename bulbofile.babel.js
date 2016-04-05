import {asset, dest} from 'bulbo'
import through from 'through'
import browserify from 'browserify'

asset('src/site/index.html')(src => src)

asset('src/site/js/index.js', {base: 'src/site'})(src => src.pipe(through(function (file) {
  file.contents = browserify(file.path).transform('babelify').bundle()
  this.queue(file)
})))

dest('site')

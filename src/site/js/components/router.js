const {on, component} = $.cc

const location = window.location

/**
 * The router on window.
 */
@component('router')
class Router {
  constructor (elem) {
    this.target = elem.data('target')
  }

  @on('hashchange')
  onHashchange () {
    if (location.hash === '') {
      location.replace('#projects')
    } else if (location.hash === '#') {
      location.replace('#projects')
    } else if (location.hash === '#projects') {
      this.target.trigger('page-all-projects')
    } else if (location.hash === '#tags') {
      this.target.trigger('page-tags')
    } else if (/^#tags\/.+/.test(location.hash)) {
      const match = location.hash.match(/^#tags\/([^\/]+)/)

      this.target.trigger('page-single-tag', match[1])
    } else if (/^#projects\/.+/.test(location.hash)) {
      const match = location.hash.match(/^#projects\/([^\/]+)/)

      this.target.trigger('page-single-project', match[1])
    } else {
      this.target.trigger('page-404')
    }
  }
}

module.exports = Router

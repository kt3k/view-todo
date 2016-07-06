const {on, component} = $.cc

const location = window.location

/**
 * The router on window.
 */
@component('router')
class Router {
  @on('hashchange')
  onHashchange () {
    if (location.hash === '') {
      location.replace('#all')
    } else if (location.hash === '#') {
      location.replace('#all')
    } else if (location.hash === '#all') {
      $('.main').trigger('page-all-projects')
    } else if (location.hash === '#tags') {
      $('.main').trigger('page-tags')
    } else if (/^#project/.test(location.hash)) {
      const match = location.hash.match(/^#project\/([^\/]+)/)

      $('.main').trigger('page-single-project', match[1])
    } else {
      $('.main').trigger('page-404')
    }
  }
}

module.exports = Router

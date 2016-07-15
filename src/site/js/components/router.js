const {on, component} = $.cc
const {route, dispatch} = require('hash-route')

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
    dispatch(this, location.hash)
  }

  @route('(#)?') root () {
    location.replace('#projects')
  }

  @route('#projects') projects () {
    this.target.trigger('page-all-projects')
  }

  @route('#tags') tags () {
    this.target.trigger('page-all-tags')
  }

  @route('#projects/:project') singleProject (params) {
    this.target.trigger('page-single-project', params.project)
  }

  @route('#tags/:tag') singleTag (params) {
    this.target.trigger('page-single-tag', params.tag)
  }

  @route('*') notFound () {
    this.target.trigger('page-404')
  }
}

module.exports = Router

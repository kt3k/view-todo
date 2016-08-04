const {on, component} = $.cc
const {route, dispatch} = require('hash-route')

const location = window.location

/**
 * The router on window.
 */
@component
class Router {
  constructor (elem) {
    this.target = elem.data('target')
  }

  @on('hashchange')
  onHashchange () {
    dispatch(this, location.hash)
  }

  @route '(#)?' () {
    location.replace('#projects')
  }

  @route '#projects' () {
    this.trigger('page-all-projects')
  }

  @route '#tags' () {
    this.trigger('page-all-tags')
  }

  @route '#projects/:project' (params) {
    this.trigger('page-single-project', params.project)
  }

  @route '#tags/:tag' (params) {
    this.trigger('page-single-tag', params.tag)
  }

  @route '*' () {
    this.trigger('page-404')
  }

  /**
   * Triggers the event.
   * @param {string} event The event name
   */
  trigger (event, params) {
    this.target.trigger(event, params)
  }
}

module.exports = Router

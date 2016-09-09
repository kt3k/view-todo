require('./globals')
require('./components/project-section')
require('./components/project-simple-section')
require('./components/tags-section')
require('./components/floating-logo')

const {fa, wait, randomHsl} = require('./util')

const ProjectRepositoryFe = require('../../domain/project-repository-fe')
const ProjectTagSetService = require('../../domain/project-tag-set-service')

require('bootstrap')

const {span, hr, div} = require('dom-gen')
const {route, dispatch} = require('hash-route')

const {emit, on, component} = $.cc

const repository = new ProjectRepositoryFe()
const service = new ProjectTagSetService()

const TRANSITION_DURATION = 400

const page = (target, key, desc) => {
  const method = desc.value

  desc.value = function () {
    this.page(() => method.apply(this, arguments))
  }
}

@component
class Main {
  constructor () {
    const onHashchange = () => dispatch(this)

    $(window).on('hashchange', onHashchange)
    setTimeout(onHashchange)
  }

  /**
   * @return {Promise<ProjectCollection>}
   */
  getProjects () {
    return repository.getAll().then(projects => {
      service.setTags(projects)

      return projects
    })
  }

  /**
   * @return {TagCollection}
   */
  getTags () {
    return this.getProjects().then(projects => projects.getTags())
  }

  /**
   * Shows the main contents.
   * @return {Promise}
   */
  outro () {
    this.elem.css('opacity', 1)
    this.elem.css('color', '#333')
    this.elem.css('transform', 'translate(0, 0)')

    return wait(TRANSITION_DURATION)
  }

  /**
   * Hides the main contents.
   * @return {Promise}
   */
  intro () {
    this.elem.css('opacity', 0)
    this.elem.css('transform', 'translate(-20px, 0)')

    return wait(TRANSITION_DURATION).then(() => this.elem.empty())
  }

  /**
   * Processes the page transition.
   * @param {Function} createPage The function which creates the page contents.
   */
  page (createPage) {
    return this.intro()
      .then(createPage)
      .then(array => this.elem.append(...array))
      .then(() => this.outro())
  }

  @route '(#)?' () {
    location.replace('#projects')
  }

  @route @page '#projects' () {
    return this.getProjects().then(projects => [
      this.backBtn('All tags', '#tags'),
      hr(),
      projects.map(project => this.projectSimpleSection(project))
    ])
  }

  @route @page '#projects/:project' (params) {
    return this.getProjects().then(projects => [
      this.backBtn('All projects', '#projects'),
      hr(),
      this.projectSection(projects.getByName(params.project))
    ])
  }

  @route @page '#tags' () {
    return this.getTags().then(tags => {
      tags.sort()

      return [
        this.backBtn('All projects', '#projects'),
        hr(),
        this.tagsSection(tags)
      ]
    })
  }

  /**
   * @param {object} e The event object
   * @param {string} name The tag name
   */
  @route @page '#tags/:tag' (params) {
    return this.getTags().then(tags => tags.getByName(params.tag)).then(tag => [
      this.backBtn('All tags', '#tags'),
      hr(),
      tag.projects.map(project => this.projectSimpleSection(project))
    ])
  }

  /**
   * @param {string} name The name of the button
   * @param {string} url The back url
   */
  backBtn (name, url) {
    return div({addClass: 'back-nav-area'},
      span(fa('arrow-left'), ' ', name).addClass('back-btn').click(() => {
        window.location.href = url
      })
    )
  }

  /**
   * @param {Project} project The project
   */
  projectSection (project) {
    return div().data({project}).cc('project-section')
  }

  /**
   * @param {Project} project The project
   */
  projectSimpleSection (project) {
    return div().data({project}).cc('project-simple-section')
  }

  /**
   * @param {Tags} tags
   */
  tagsSection (tags) {
    return div().data({tags}).cc('tags-section')
  }
}

module.exports = Main

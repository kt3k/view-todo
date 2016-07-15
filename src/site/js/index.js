require('./globals')
require('./components/project-section')
require('./components/project-simple-section')
require('./components/tags-section')
require('./components/floating-logo')
require('./components/router')

const {fa, wait, randomHsl} = require('./util')

const ProjectRepositoryFe = require('../../domain/project-repository-fe')
const ProjectTagSetService = require('../../domain/project-tag-set-service')

require('bootstrap')

const {span, hr, div} = require('dom-gen')

const {emit, on, component} = $.cc

const repository = new ProjectRepositoryFe()
const service = new ProjectTagSetService()

void @component('main')
class {
  constructor (elem) {
    const router = $(window).data({target: elem}).cc('router')

    setTimeout(() => router.trigger('hashchange'))
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

  @on('show-page')
  showPage () {
    this.elem.css('opacity', 1)
    this.elem.css('color', '#333')
    this.elem.css('transform', 'translate(0, 0)')
  }

  emptyPage () {
    this.elem.css('opacity', 0)
    this.elem.css('color', randomHsl(100, 53))
    this.elem.css('transform', 'translate(-20px, 0)')

    return wait(400).then(() => this.elem.empty())
  }

  @on('page-all-projects')
  @emit('show-page').last
  allProjects () {
    return this.emptyPage().then(() => this.getProjects()).then(projects => {
      this.appendBackBtn('All tags', '#tags')
      this.elem.append(hr())

      projects.forEach(project => {
        this.appendProjectSimpleSection(project)
      })
    })
  }

  @on('page-single-project')
  @emit('show-page').last
  singleProject (e, title) {
    return this.emptyPage().then(() => this.getProjects()).then(projects => {
      console.log('single page')
      this.appendBackBtn('All projects', '#projects')
      this.elem.append(hr())

      const project = projects.getByName(title)

      this.appendProjectSection(project)
    })
  }

  @on('page-all-tags')
  @emit('show-page').last
  showTagsPage () {
    return this.emptyPage().then(() => this.getTags()).then(tags => {
      tags.sort()

      this.appendBackBtn('All projects', '#projects')
      this.elem.append(hr())

      this.appendTagsSection(tags)
    })
  }

  /**
   * @param {object} e The event object
   * @param {string} name The tag name
   */
  @on('page-single-tag')
  @emit('show-page').last
  showSingleTagPage (e, name) {
    return this.emptyPage().then(() => this.getTags()).then(tags => {
      const tag = tags.getByName(name)

      this.appendBackBtn('All tags', '#tags')
      this.elem.append(hr())

      tag.projects.forEach(project => {
        this.appendProjectSimpleSection(project)
      })
    })
  }

  /**
   * @param {string} name The name of the button
   * @param {string} url The back url
   */
  appendBackBtn (name, url) {
    this.elem.append(
      div({addClass: 'back-nav-area'},
        span(fa('arrow-left'), ' ', name).addClass('back-btn').click(() => {
          window.location.href = url
        })
      )
    )
  }

  /**
   * @param {Project} project The project
   */
  appendProjectSection (project) {
    this.elem.append(div().data({project}).cc('project-section'))
  }

  /**
   * @param {Project} project The project
   */
  appendProjectSimpleSection (project) {
    this.elem.append(div().data({project}).cc('project-simple-section'))
  }

  /**
   * @param {Tags} tags
   */
  appendTagsSection (tags) {
    this.elem.append(div().data({tags}).cc('tags-section'))
  }
}

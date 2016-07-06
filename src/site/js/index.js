require('./globals')
require('./components/project-section')
require('./components/project-simple-section')
require('./components/router')

const {fa} = require('./util')

const ProjectRepositoryFe = require('../../domain/project-repository-fe')
const ProjectTagSetService = require('../../domain/project-tag-set-service')

require('bootstrap')

const {span, hr, div} = require('dom-gen')

const {emit, on, component} = $.cc

const repository = new ProjectRepositoryFe()
const service = new ProjectTagSetService()

void @component('main')
class Main {
  constructor () {
    const router = $(window).cc('router')

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
    return getProjects().then(projects => projects.getTags())
  }

  @on('page-empty')
  empty () {
    this.elem.empty()
  }

  @on('page-all-projects')
  @emit('page-empty')
  allProjects () {
    this.getProjects().then(projects => {
      this.appendBackBtn('All tags', '#tags')
      this.elem.append(hr())

      projects.forEach(project => {
        this.appendProjectSimpleSection(project)
      })
    })
  }

  @on('page-single-project')
  @emit('page-empty')
  singleProject (e, title) {
    this.getProjects().then(projects => {
      this.appendBackBtn('All projects', '#all')

      const project = projects.getByName(title)

      this.appendProjectSection(project)
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
   * @param {Project}
   */
  appendProjectSection (project) {
    this.elem.append(div().data({project}).cc('project-section'))
  }

  /**
   * @param {Project}
   */
  appendProjectSimpleSection (project) {
    this.elem.append(div().data({project}).cc('project-simple-section'))
  }
}

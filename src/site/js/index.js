require('./globals')
require('./components/project-section')
require('./components/router')

const ProjectRepositoryFe = require('../../domain/project-repository-fe')

require('bootstrap')

const {div} = require('dom-gen')

const {emit, on, component} = $.cc

const repository = new ProjectRepositoryFe()

void @component('main')
class Main {
  constructor () {
    const router = $(window).cc.init('router')

    setTimeout(() => router.onHashchange())
  }

  /**
   * @return {Promise<ProjectCollection>}
   */
  getProjects () {
    return repository.getAll()
  }

  @on('page-empty')
  empty () {
    this.elem.empty()
  }

  @on('page-all-projects')
  @emit('page-empty')
  allProjects () {
    this.getProjects().then(projects => {
      projects.forEach(project => {
        this.appendProjectSection(project)
      })
    })
  }

  @on('page-single-project')
  @emit('page-empty')
  singleProject(e, title) {
    this.getProjects().then(projects => {
      console.log(projects)
      window.projects = projects
      const project = projects.getByName(title)
      console.log(project)

      this.appendProjectSection(project)
    })
  }

  /**
   * @private
   * @param {Project}
   */
  appendProjectSection (project) {
    this.elem.append(div().data({project}).cc('project-section'))
  }
}

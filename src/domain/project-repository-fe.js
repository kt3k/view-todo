const ProjectFactory = require('./project-factory')

const factory = new ProjectFactory()

const PROJECT_API = '/api/projects'

class ProjectRepositoryFe {
  getAll () {
    return Promise.resolve($.get(PROJECT_API)).then(arr => factory.createCollectionFromArray(arr))
  }
}

module.exports = ProjectRepositoryFe

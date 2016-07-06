const ProjectConfigurationRepository = require('../src/domain/project-configuration-repository')

const fixtureConfigPath = `${__dirname}/fixture/todo.conf.md`

const repository = new ProjectConfigurationRepository()

exports.getFixtureProjects = () => repository.getByPath(fixtureConfigPath).getProjects()

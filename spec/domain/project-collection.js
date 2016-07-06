const ProjectConfigurationRepository = require('../../src/domain/project-configuration-repository')
const Project = require('../../src/domain/project')

const {expect} = require('chai')
const path = require('path')
const fixtureConfigPath = `${path.dirname(__dirname)}/fixture/todo.conf.md`

const repository = new ProjectConfigurationRepository()

describe('ProjectCollection', () => {
  describe('getByName', () => {
    it('gets the project by its name', () => {
      const collection = repository.getByPath(fixtureConfigPath).getProjects()

      const project = collection.getByName('view-todo')

      expect(project).to.be.instanceof(Project)
      expect(project.title).to.equal('view-todo')
    })
  })
})

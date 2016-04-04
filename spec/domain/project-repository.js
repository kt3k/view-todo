import Project from '../../src/domain/project'
import ProjectRepository from '../../src/domain/project-repository'
import ProjectConfiguration from '../../src/domain/project-configuration'

import path from 'path'

import {expect} from 'chai'

const repository = new ProjectRepository()

const fixturePath = `${path.dirname(__dirname)}/fixture/TODO.md`

describe('ProjectRepository', () => {

  describe('getByPath', () => {

    it('gets the project from todo.md of the given path', () => {

      const configuration = new ProjectConfiguration({
        title: 'foo',
        path: fixturePath
      })

      const project = repository.getByConfiguration(configuration)

      expect(project).to.be.instanceof(Project)
      expect(project.title).to.equal('foo')

    })

  })

})

import Project from '../../src/domain/project'
import ProjectRepository from '../../src/domain/project-repository'

import path from 'path'

import {expect} from 'chai'

const repository = new ProjectRepository()

const fixturePath = `${path.dirname(__dirname)}/fixture/TODO.md`

describe('ProjectRepository', () => {

  describe('getByPath', () => {

    it('gets the project from todo.md of the given path', () => {

      const project = repository.getByPath(fixturePath)

      expect(project).to.be.instanceof(Project)
      expect(project.title).to.equal('fixture')

    })

  })

})

import Project from '../../src/domain/project'
import ProjectFactory from '../../src/domain/project-factory'
import ProjectConfiguration from '../../src/domain/project-configuration'

import fs from 'fs'
import path from 'path'

import {expect} from 'chai'

const factory = new ProjectFactory()

describe('ProjectFactory', () => {

  describe('createFromMarkdown', () => {

    it('creates a project from the markdown string and configuration', () => {

      const configuration = new ProjectConfiguration({title: 'foo', path: '/home/user/project'})

      const project = factory.createFromMarkdown(fs.readFileSync(`${path.dirname(__dirname)}/fixture/TODO.md`).toString(), configuration)

      expect(project).to.be.instanceof(Project)
      expect(project.title).to.equal('foo')
      expect(project.path).to.equal('/home/user/project')
      expect(project.dones).to.be.instanceof(Array)
      expect(project.dones).to.have.length(1)
      expect(project.todos).to.be.instanceof(Array)
      expect(project.todos).to.have.length(4)

    })

  })

})

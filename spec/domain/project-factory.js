import Project from '../../src/domain/project'
import ProjectFactory from '../../src/domain/project-factory'

import fs from 'fs'

import {expect} from 'chai'

const factory = new ProjectFactory()

describe('ProjectFactory', () => {

  describe('createFromTitlePathMarkdown', () => {

    it('creates a project from the title, path and markdown string', () => {

      const project = factory.createFromTitlePathMarkdown('foo', '/home/user/project', fs.readFileSync(`${__dirname}/../fixture/TODO.md`).toString())

      expect(project).to.be.instanceof(Project)

    })

  })

})

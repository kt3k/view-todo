import ProjectConfiguration from '../../src/domain/project-configuration'
import Project from '../../src/domain/project'

import {expect} from 'chai'

import path from 'path'

const fixturePath = `${path.dirname(__dirname)}/fixture`

describe('ProjectConfiguration', () => {

  describe('getProject', () => {

    it('gets the project', () => {

      const configuration = new ProjectConfiguration({
        title: 'foo',
        path: fixturePath,
        note: 'note',
        tags: 'a, b'
      })

      const project = configuration.getProject()

      expect(project).to.be.instanceof(Project)
      expect(project.title).to.equal('foo')
      expect(project.path).to.equal(fixturePath)
      expect(project.configuration).to.equal(configuration)

    })

  })

})

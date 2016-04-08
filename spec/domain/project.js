import ProjectConfiguration from '../../src/domain/project-configuration'

import {expect} from 'chai'

import path from 'path'

const fixturePath = `${path.dirname(__dirname)}/fixture`
const fixtureTodoPath = fixturePath + '/TODO.md'

describe('Project', () => {

  describe('getTitle', () => {

    it('returns title if exists', () => {

      const conf = new ProjectConfiguration({path: fixturePath, title: 'foo'})
      const project = conf.getProject()

      expect(project.getTitle()).to.equal('foo')

    })

    it('returns dirname if title property does not exist', () => {

      const conf0 = new ProjectConfiguration({path: fixturePath})
      const project0 = conf0.getProject()

      expect(project0.getTitle()).to.equal('fixture')

      const conf1 = new ProjectConfiguration({path: fixtureTodoPath})
      const project1 = conf1.getProject()

      expect(project1.getTitle()).to.equal('fixture')

    })

  })

})

import ProjectConfigurationFactory from '../../src/domain/project-configuration-factory'
import ProjectConfiguration from '../../src/domain/project-configuration'

import {expect} from 'chai'

const factory = new ProjectConfigurationFactory()

describe('ProjectConfigurationFactory', () => {

  describe('createFromDslObject', () => {

    it('creates a project configuration from the dsl object', () => {

      const conf = factory.createFromDslObject({
        title: 'foo',
        path: '/home/user/who/foo',
        note: 'This is a sample.',
        tags: 'bar baz, spam'
      })

      expect(conf).to.be.instanceof(ProjectConfiguration)
      expect(conf.title).to.equal('foo')
      expect(conf.path).to.equal('/home/user/who/foo')
      expect(conf.note).to.equal('This is a sample.')
      expect(conf.tags).to.eql(['bar', 'baz', 'spam'])

    })

  })

})

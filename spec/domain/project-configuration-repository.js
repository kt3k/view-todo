import ProjectConfigurationRepository from '../../src/domain/project-configuration-repository'
import ProjectConfigurationCollection from '../../src/domain/project-configuration-collection'

import {expect} from 'chai'

import path from 'path'

const fixtureConfigPath = `${path.dirname(__dirname)}/fixture/todo.conf.md`

const repository = new ProjectConfigurationRepository()

describe('ProjectConfigurationRepository', () => {
  describe('getByPath', () => {
    it('gets the configuration collection from the path', () => {
      const collection = repository.getByPath(fixtureConfigPath)

      expect(collection).to.be.instanceof(ProjectConfigurationCollection)
      expect(collection.items).to.have.length(2)
    })
  })
})

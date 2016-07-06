const TagFactory = require('../../src/domain/tag-factory')
const TagCollection = require('../../src/domain/tag-collection')
const {getFixtureProjects} = require('../helper')

const {expect} = require('chai')

const factory = new TagFactory()

describe('TagFactory', () => {
  describe('createCollectionFromProjectCollection', () => {
    it('creates a tag collection from the given project collection', () => {
      const projCollection = getFixtureProjects()

      const tagCollection = factory.createCollectionFromProjectCollection(projCollection)

      expect(tagCollection).to.be.instanceof(TagCollection)
      expect(tagCollection.tags.length).to.equal(3)
    })
  })
})

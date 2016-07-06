const TagCollection = require('./tag-collection')
const Tag = require('./tag')

class TagFactory {
  /**
   * @param {ProjectCollection} projects The project collection
   */
  createCollectionFromProjectCollection (projects) {
    const ProjectCollection = require('./project-collection')

    const mapping = {}
    const tags = []

    projects.forEach(project => {
      project.configuration.tags.forEach(tagName => {
        const projectsForTag = mapping[tagName] || (mapping[tagName] = [])

        projectsForTag.push(project)
      })
    })

    Object.keys(mapping).forEach(name => {
      const projects = new ProjectCollection(mapping[name])

      tags.push(new Tag({name, projects}))
    })

    return new TagCollection(tags)
  }
}

module.exports = TagFactory

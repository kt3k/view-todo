/**
 * The service class for setting tags to projects.
 */
class ProjectTagSetService {
  /**
   * @param {ProjectCollection}
   */
  setTags(projects) {
    const tags = projects.getTags()

    projects.forEach(project => {
      project.tags = tags.getByNames(project.configuration.tags)
    })
  }
}

module.exports = ProjectTagSetService


/**
 * The collection class of Projects.
 */
class ProjectCollection {
  /**
   * @param {Project[]} projects
   */
  constructor (projects) {
    this.projects = projects || []

    this.dict = {}

    this.projects.forEach(project => {
      this.dict[project.getTitle()] = project
    })
  }

  /**
   * @param {string} name The project name
   */
  getByName (name) {
    return this.dict[name]
  }

  /**
   * @param {Function} func The mapping function
   */
  map (func) {
    return this.projects.map(func)
  }

  /**
   * @param {Function} func The iteration function
   */
  forEach (func) {
    this.projects.forEach(func)
  }
}

module.exports = ProjectCollection

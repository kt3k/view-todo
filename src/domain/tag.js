/**
 * The tag model.
 */
class Tag {
  /**
   * @param {string} name The tag name
   */
  consturctor ({name, projects}) {
    this.name = name
    this.projects = projects
  }
}

module.exports = Tag

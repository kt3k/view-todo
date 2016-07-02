/**
 * The project model.
 */
export default class Project {
  /**
   * @param {string} title The title
   * @param {string} path The path
   * @param {Todo[]} todos The todos
   * @param {Todo[]} dones The dones
   * @param {ProjectConfiguration} configuration The project configuration
   */
  constructor ({title, path, todos, dones, configuration}) {
    this.title = title
    this.path = path
    this.todos = todos
    this.dones = dones
    this.configuration = configuration
  }

  /**
   * Gets the title. Use the dirname which todo.md is put when not given.
   * @return {string}
   */
  getTitle () {
    if (this.title != null) {
      return this.title
    }

    return this.configuration.getTodoDirname()
  }
}

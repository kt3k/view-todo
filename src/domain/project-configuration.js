import ProjectRepository from './project-repository'
const repository = new ProjectRepository()

/**
 * The project configuration model.
 */
export default class ProjectConfiguration {

  constructor({title, path, note, order, tags}) {
    this.title = title
    this.path = path
    this.note = note
    this.order = order
    this.tags = tags
  }

  /**
   * Gets the todo.md path candidates.
   * @return {string[]}
   */
  getTodoPaths() {

    if (/(todo|TODO)\.md$/.test(this.path)) {
      return [this.path]
    }

    if (/\/$/.test(this.path)) {
      return [this.path + 'TODO.md', this.path + 'todo.md']
    }

    return [this.path + '/TODO.md', this.path + '/todo.md']

  }

  /**
   * Gets the project.
   * @return {Project}
   */
  getProject() {
    return repository.getByConfiguration(this)
  }
}

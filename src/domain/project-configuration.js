import ProjectRepository from './project-repository'
import path from 'path'
const repository = new ProjectRepository()

/**
 * The project configuration model.
 */
export default class ProjectConfiguration {

  constructor({title, path, note, order, tags}) {
    this.title = title
    this.path = path
    this.note = note
    this.order = order || -Infinity
    this.tags = tags
  }

  /**
   * Gets the todo.md path candidates.
   * @return {string[]}
   */
  getTodoPaths() {

    const extname = path.extname(this.path)

    if (extname === '.md' || extname === '.markdown') {
      return [this.path]
    }

    return [path.join(this.path, '/TODO.md'), path.join(this.path, '/todo.md')]

  }

  /**
   * Gets the dirname which todo.md is supposed to be in.
   * @return {string}
   */
  getTodoDirname() {
    if (/(todo|TODO)\.md$/.test(this.path)) {
      return path.basename(path.dirname(this.path))
    }

    return path.basename(this.path)
  }

  /**
   * Gets the project.
   * @return {Project}
   */
  getProject() {
    return repository.getByConfiguration(this)
  }
}

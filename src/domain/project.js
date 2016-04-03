/**
 * The project model.
 */
export default class Project {

  constructor({title, path, todos, dones}) {
    this.title = title
    this.path = path
    this.todos = todos
    this.dones = dones
  }

}

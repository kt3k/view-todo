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
}

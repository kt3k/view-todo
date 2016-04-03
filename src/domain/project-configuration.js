/**
 * The project configuration model.
 */
export default class ProjectConfiguration {

  constructor({path, note, order, tags}) {
    this.path = path
    this.note = note
    this.order = order
    this.tags = tags
  }
}

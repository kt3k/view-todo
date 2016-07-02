/**
 * The todo model.
 */
export default class Todo {

  /**
   * @param {string} title The title
   * @param {boolean} completed True iff completed
   * @param {TODO[]} subtodos The sub todos
   */
  constructor ({title, completed, subtodos}) {
    this.title = title
    this.completed = completed
    this.subtodos = subtodos
  }
}

const {ul, li, h3, sup} = require('dom-gen')

const {component} = $.cc

/**
 * TaskSection component.
 */
export class TaskSection {
  /**
   * @param {jQuery} elem
   */
  constructor (elem) {
    const tasks = elem.data('tasks')

    elem.append(
      h3(this.taskLabel(), sup(tasks.length)),
      ul(tasks.map(task => li(task.title)))
    )
  }

  /**
   * @abstract
   */
  taskLabel () {}
}

@component('done-section')
export class DoneSection extends TaskSection {
  constructor (elem) {
    super(elem)

    elem.addClass('gray-out')
  }

  taskLabel () {
    return 'DONE'
  }
}

@component('todo-section')
export class TodoSection extends TaskSection {
  taskLabel () {
    return 'TODO'
  }
}

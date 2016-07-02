const {ul, li, i} = require('dom-gen')

const {component} = $.cc

/**
 * TaskSection component.
 */
class TaskSection {
  /**
   * @param {jQuery} elem
   */
  constructor (elem) {
    const tasks = elem.data('tasks')

    elem.append(
      ul(tasks.map(task => li(this.icon(), ' ', task.title)))
    )
  }
}

void @component('done-section')
class DoneSection extends TaskSection {
  constructor (elem) {
    super(elem)

    elem.addClass('gray-out')
  }

  icon() {
    return i().addClass('fa fa-check-square-o')
  }
}

void @component('todo-section')
class TodoSection extends TaskSection {
  icon() {
    return i().addClass('fa fa-thumb-tack')
  }
}

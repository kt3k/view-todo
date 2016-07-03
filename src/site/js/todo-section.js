const {ul, li, i, button} = require('dom-gen')

const {on, component} = $.cc

/**
 * TaskSection component.
 */
class TaskSection {
  /**
   * @param {jQuery} elem
   */
  constructor (elem) {
    this.tasks = elem.data('tasks')
    this.elem = elem
  }

  appendTaskList (elem) {
    return ul(this.tasks.map(task => li(this.icon(), ' ', task.title))).appendTo(elem)
  }
}

void @component('done-section')
class DoneSection extends TaskSection {
  constructor (elem) {
    super(elem)

    if (this.tasks.length > 0) {
      this.appendShowMoreBtn(elem)
      this.appendTaskList(elem).addClass('task-list task-list-hidden gray-out')
    }
  }

  appendShowMoreBtn (elem) {
    button(i().addClass('fa fa-check-square-o'), ' ', 'Show dones').appendTo(elem)
  }

  @on('click').at('button')
  onButtonClick () {
    this.elem.find('ul').toggleClass('task-list-hidden')
  }

  icon() {
    return i().addClass('fa fa-check-square-o')
  }
}

void @component('todo-section')
class TodoSection extends TaskSection {
  constructor (elem) {
    super(elem)

    this.appendTaskList(elem).addClass('task-list')
  }

  icon() {
    return i().addClass('fa fa-thumb-tack')
  }
}

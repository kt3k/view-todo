import './todo-section'
import {div, ul, li, h3, sup} from 'dom-gen'

const {component, Coelement} = $.cc

export class TaskSection extends Coelement {

  constructor(elem) {
    super(elem)

    const tasks = elem.data('tasks')

    this.elem.append(
      h3(this.taskLabel(), sup(tasks.length)),
      ul(tasks.map(task => li(task.title)))
    )
  }

  /**
   * @abstract
   */
  taskLabel() {}
}

@component('done-section')
export class DoneSection extends TaskSection {

  constructor(elem) {
    super(elem)

    elem.addClass('gray-out')
  }

  taskLabel() {
    return 'DONE'
  }
}

@component('todo-section')
export class TodoSection extends TaskSection {

  taskLabel() {
    return 'TODO'
  }
}

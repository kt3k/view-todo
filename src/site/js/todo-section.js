import './todo-section'
import {div, ul, li, h3} from 'dom-gen'

const {component, Coelement} = $.cc

export class TaskSection extends Coelement {

  constructor(elem) {
    super(elem)

    const tasks = elem.data('tasks')

    h3().text(this.taskLabel()).appendTo(this.elem)

    const list = ul().appendTo(this.elem)

    tasks.forEach(task => li().text(task.title).appendTo(list))
  }

  /**
   * @abstract
   */
  taskLabel() {}
}

@component('done-section')
export class DoneSection extends TaskSection {
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

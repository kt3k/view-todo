import './todo-section'
import {div, ul, li, h3} from 'dom-gen'

const {component, Coelement} = $.cc

export class TaskSection extends Coelement {

  constructor(elem) {
    super(elem)

    const tasks = elem.data('tasks')

    this.elem.append(
      h3().text(this.taskLabel()),
      ul().append(tasks.map(task => li().text(task.title)))
    )
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

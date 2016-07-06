require('./todo-section')
require('./project-status-section')
require('./project-title-section')

const {div, hr, h2, p} = require('dom-gen')

const {component} = $.cc

@component('project-section')
class ProjectSection {
  constructor (elem) {
    /**
     * @property {Project}
     */
    const project = elem.data('project')

    elem.append(
      h2('TODO ' + project.todos.length).addClass('todo-title'),
      p({data: {project}}).cc('project-title-section'),
      p({data: {project}}).cc('project-status-section'),
      div({data: {tasks: project.todos}}).cc('todo-section'),
      div({data: {tasks: project.dones}}).cc('done-section'),
      hr()
    )
  }

  onMouseenter () {
    this.elem.find('.task-area').removeClass('task-area-hidden')
  }
}

module.exports = ProjectSection

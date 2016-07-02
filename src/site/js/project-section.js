require('./todo-section')

const {div, hr, h2} = require('dom-gen')

const {on, component} = $.cc

@component('project-section')
class ProjectSection {

  constructor (elem) {
    /**
     * @property {Project}
     */
    const project = elem.data('project')

    elem.append(
      h2(project.getTitle()),
      `<span class="label label-danger">${project.todos.length}</span>`,
      ' ',
      `<span class="label label-success">${project.dones.length}</span>`,
      ' ',
      project.configuration.tags.map(tag =>
        `<span class="label label-info">${tag}</span>`
      ).join(' '),
      div({addClass: 'container-fluid task-area task-area-hidden'},
        div({data: {tasks: project.todos}}).cc('todo-section'),
        div({data: {tasks: project.dones}}).cc('done-section')
      ),
      hr()
    )
  }

  @on('mouseenter').at('h2')
  onMouseenter () {
    this.elem.find('.task-area').removeClass('task-area-hidden')
  }

}

module.exports = ProjectSection

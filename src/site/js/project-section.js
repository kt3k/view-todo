require('./todo-section')

const {div, hr, h2, sup} = require('dom-gen')

const {on, component} = $.cc

@component('project-section')
class ProjectSection {

  constructor(elem) {
    /**
     * @property {Project}
     */
    const project = elem.data('project')

    elem.append(
      h2(
        project.getTitle(),
        sup(project.todos.length, sup(project.dones.length).addClass('gray-out')),
        ' ',
        project.configuration.tags.map(tag =>
          `<small><span class="label label-info">${tag}</span> </small>`
        )
      ),
      div({addClass: 'container task-area task-area-hidden'},
        div({data: {tasks: project.todos}}).cc('todo-section'),
        div({data: {tasks: project.dones}}).cc('done-section')
      ),
      hr()
    )
  }

  @on('mouseenter').at('h2')
  onMouseenter() {
    this.elem.find('.task-area').removeClass('task-area-hidden')
  }

}

module.exports = ProjectSection

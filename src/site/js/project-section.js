require('./todo-section')

const {i, div, hr, h2, span, p} = require('dom-gen')

const {component} = $.cc

@component('project-section')
class ProjectSection {
  constructor (elem) {
    /**
     * @property {Project}
     */
    const project = elem.data('project')

    elem.append(
      h2('TODO').addClass('todo-title'),
      p(`<i class="fa fa-bookmark"></i> ${project.getTitle()} - ${project.path}`),
      p(
        span(
          i().addClass('fa fa-thumb-tack'), ' ',
          project.todos.length
        ).addClass('todo-label'),
        span(
          i().addClass('fa fa-check-square-o'), ' ',
          project.dones.length
        ).addClass('todo-label'),
        project.configuration.tags.map(tag =>
          `<span class="tag-label"><i class="fa fa-tag"></i> ${tag}</span>`
        ).join(' ')
      ),
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

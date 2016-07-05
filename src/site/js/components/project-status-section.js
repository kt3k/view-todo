const {fa} = require('../util')

const {span} = require('dom-gen')

const {component} = $.cc

@component('project-status-section')
class ProjectStatusSection {
  constructor (elem) {
    /**
     * @property {Project}
     */
    const project = elem.data('project')

    elem.append(
      span(
        fa('thumb-tack'), ' ', project.todos.length
      ).addClass('todo-label'),
      span(
        fa('check-square-o'), ' ', project.dones.length
      ).addClass('todo-label'),
      project.configuration.tags.map(tag =>
        `<span class="tag-label"><i class="fa fa-tag"></i> ${tag}</span>`
      ).join(' ')
    )
  }
}

module.exports = ProjectStatusSection

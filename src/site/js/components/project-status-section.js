const {fa} = require('../util')

const {span} = require('dom-gen')

const {on, component} = $.cc

@component
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
      ).addClass('todo-label')
    )

    project.tags.forEach(tag => {
      elem.append(span({addClass: 'tag-label'},
        fa('tag'), ' ', `${tag.name} (${tag.projects.length})`
      ).click(() => {
        window.location.href = '#tags/' + tag.name
      }), ' ')
    })
  }

  @on('click').at('.tag-label')
  onTagLabelClick (e) {
    console.log($(e.target).html())
  }
}

module.exports = ProjectStatusSection

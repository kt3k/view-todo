require('./todo-section')
require('./project-status-section')
require('./project-title-section')

const {hr, p} = require('dom-gen')

const {component} = $.cc

@component('project-simple-section')
class ProjectSimpleSection {
  constructor (elem) {
    /**
     * @property {Project}
     */
    const project = elem.data('project')

    elem.append(
      p({data: {project}}).cc('project-title-section').click(e => {
        window.location.href = '#project/' + project.getTitle()
      }),
      p({data: {project}}).cc('project-status-section'),
      hr()
    )
  }
}

module.exports = ProjectSimpleSection

const {component} = $.cc

@component('project-title-section')
class ProjectTitleSection {
  constructor (elem) {
    const project = elem.data('project')

    elem.append(`<i class="fa fa-bookmark"></i> ${project.getTitle()}`)
  }
}

module.exports = ProjectTitleSection

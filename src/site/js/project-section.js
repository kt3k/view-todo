import './todo-section'

const {component, Coelement} = $.cc

@component('project-section')
export default class ProjectSection extends Coelement {

  constructor(elem) {
    super(elem)

    /**
     * @property {Project}
     */
    this.project = elem.data('project')

    this.setUp()
  }

  setUp() {

    const project = this.project

    const pageTitle = $('<h2/>').text(project.title).appendTo(this.elem)

    project.configuration.tags.forEach(tag => {
      const wrap = $('<span/>').appendTo(pageTitle)
      const small = $('<small/>').appendTo(wrap)
      $('<span"/>').text(' ').appendTo(small)
      $('<span class="label label-info"/>').text(tag).appendTo(small)
    })

    const container = $('<div class="container"/>').appendTo(this.elem)

    $('<div/>', {
      data: { tasks: project.todos }
    }).appendTo(container).cc.init('todo-section')

    $('<div/>', {
      data: { tasks: project.dones }
    }).appendTo(container).cc.init('done-section')

    $('<hr />').appendTo(this.elem)
  }

}

import './todo-section'
import {div, hr, small, span} from 'dom-gen'

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
      const wrap = span().appendTo(pageTitle)
      const sml = small().appendTo(wrap)
      span().text(' ').appendTo(sml)
      span({addClass: 'label label-info', text: tag}).appendTo(sml)
    })

    const container = div().addClass('container').appendTo(this.elem)

    div({
      data: { tasks: project.todos }
    }).appendTo(container).cc.init('todo-section')

    div({
      data: { tasks: project.dones }
    }).appendTo(container).cc.init('done-section')

    hr().appendTo(this.elem)
  }

}

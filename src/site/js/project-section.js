import './todo-section'
import {div, hr, small, span, h2} from 'dom-gen'

const {component, Coelement} = $.cc

@component('project-section')
export default class ProjectSection extends Coelement {

  constructor(elem) {
    super(elem)

    /**
     * @property {Project}
     */
    this.project = elem.data('project')

    this.elem.append(
      h2().append(
        this.project.title,
        this.project.configuration.tags.map(tag =>
          span().append(
            small().append(
              span().text(' '),
              span().text(tag).addClass('label label-info')
            )
          )
        )
      ),
      div().addClass('container').append(
        div().data({ tasks: this.project.todos }).addClass('todo-section').cc.up(),
        div().data({ tasks: this.project.dones }).addClass('done-section').cc.up()
      ),
      hr()
    )
  }

}

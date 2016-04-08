import './todo-section'
import {div, hr, h2} from 'dom-gen'

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
        this.project.getTitle(),
        this.project.configuration.tags.map(tag =>
          ` <small><span class="label label-info">${tag}</span></small>`
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

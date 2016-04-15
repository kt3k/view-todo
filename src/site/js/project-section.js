import './todo-section'
import {div, hr, h2, sup} from 'dom-gen'

const {event, component, Coelement} = $.cc

@component('project-section')
export default class ProjectSection extends Coelement {

  constructor(elem) {
    super(elem)

    /**
     * @property {Project}
     */
    this.project = elem.data('project')
    const project = this.project

    this.elem.append(
      h2(
        this.project.getTitle(),
        sup(project.todos.length, sup(project.dones.length).addClass('gray-out')),
        ' ',
        this.project.configuration.tags.map(tag =>
          `<small><span class="label label-info">${tag}</span> </small>`
        )
      ),
      div({addClass: 'container'},
        div({data: {tasks: this.project.todos}, addClass: 'todo-section'}).cc.up(),
        div({data: {tasks: this.project.dones}, addClass: 'done-section'}).cc.up()
      ),
      hr()
    )
  }

  @event('click', 'small')
  onClick() {
    global.alert(this.project.getTitle() + ' clicked!')
  }

}

import './globals'
import './project-section'
import ProjectFactory from '../../domain/project-factory'

import 'bootstrap'
import {div} from 'dom-gen'

const PROJECT_API = '/api/projects'

const factory = new ProjectFactory()

main()

function main() {

  return Promise.resolve($.get(PROJECT_API)).then(projects => {

    projects.forEach(project => div({data: {project: factory.createFromObject(project)}}).appendTo('.main').cc.init('project-section'))

  })

}

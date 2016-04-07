import './globals'
import 'bootstrap'
import './project-section'
import {div} from 'dom-gen'

const PROJECT_API = '/api/projects'

main()

function main() {

  return Promise.resolve($.get(PROJECT_API)).then(projects => {

    projects.forEach(project => div({data: {project}}).appendTo('.main').cc.init('project-section'))

  })

}

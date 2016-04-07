import './globals'
import 'bootstrap'
import './project-section'

const PROJECT_API = '/api/projects'

main()

function main() {

  return Promise.resolve($.get(PROJECT_API)).then(projects => {

    projects.forEach(project => div({data: {project}}).appendTo('.main').cc.init('project-section'))

  })

}

function domGen(tagName) {
  return opts => $('<' + tagName + '/>', opts)
}

const div = domGen('div')

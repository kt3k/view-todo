import './globals'
import 'bootstrap'
import {Promise} from 'es6-promise'

const PROJECT_API = '/api/projects'

function main() {

  Promise.resolve($.get(PROJECT_API)).then(projects => {

    projects.forEach(project => renderProject(project))

  })

}

function renderProject(project) {
  const main = '.main'

  $('<h2/>').text(project.title).appendTo(main)

  const container = $('<div class="container"/>').appendTo(main)

  $('<h3/>').text('TODO').appendTo(container)

  const todoList = $('<ul/>').appendTo(container)

  project.todos.forEach(todo => {
    $('<li/>').text(todo.title).appendTo(todoList)
  })

  $('<h3/>').text('DONE').appendTo(container)

  const doneList = $('<ul/>').appendTo(container)

  project.dones.forEach(done => {
    $('<li/>').text(done.title).appendTo(doneList)
  })

  $('<hr />').appendTo('.main')
}

main()

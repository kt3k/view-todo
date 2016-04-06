import './globals'
import 'bootstrap'
import {Promise} from 'es6-promise'

const PROJECT_API = '/api/projects'

function main() {

  return Promise.resolve($.get(PROJECT_API)).then(projects => {

    projects.forEach(project => renderProject(project))

  })

}

function renderProject(project) {
  const main = '.main'

  const pageTitle = $('<h2/>').text(project.title).appendTo(main)

  project.configuration.tags.forEach(tag => {
    const wrap = $('<span/>').appendTo(pageTitle)
    const small = $('<small/>').appendTo(wrap)
    $('<span"/>').text(' ').appendTo(small)
    $('<span class="label label-info"/>').text(tag).appendTo(small)
  })

  const container = $('<div class="container"/>').appendTo(main)

  $('<h3/>').text('TODO').appendTo(container)

  const todoList = $('<ul/>').appendTo(container)

  project.todos.forEach(todo => {
    $('<li/>').text(todo.title).appendTo(todoList)
  })

  const doneSection = $('<div class="done-section"/>').appendTo(container)

  $('<h3/>').text('DONE').appendTo(doneSection)

  const doneList = $('<ul/>').appendTo(doneSection)

  project.dones.forEach(done => {
    $('<li/>').text(done.title).appendTo(doneList)
  })

  $('<hr />').appendTo('.main')
}

main()

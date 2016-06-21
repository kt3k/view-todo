import './globals'
import './project-section'
import ProjectFactory from '../../domain/project-factory'

import 'bootstrap'
import {div} from 'dom-gen'

const PROJECT_API = '/api/projects'

const factory = new ProjectFactory()

/**
 * The entry point.
 */
const main = () => {
  getProjects().then(projects => {
    projects.forEach(project => {
      div().data({project}).cc('project-section').appendTo('.main')
    })
  })
}

/**
 * @return {Promise<Project[]>}
 */
const getProjects = () => Promise.resolve($.get(PROJECT_API)).then(projects => projects.map(project => factory.createFromObject(project)))

main()

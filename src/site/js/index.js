import './globals'
import './components/project-section'
import ProjectFactory from '../../domain/project-factory'

import 'bootstrap'
import {div} from 'dom-gen'

const PROJECT_API = '/api/projects'

const factory = new ProjectFactory()

/**
 * The entry point.
 */
const main = () => getProjects().then(projects => {
  $('.main').append(projects.map(project => div().data({project}).cc('project-section')))
})

/**
 * @return {Promise<Project[]>}
 */
const getProjects = () => Promise.resolve($.get(PROJECT_API)).then(projects => projects.map(project => factory.createFromObject(project)))

main()

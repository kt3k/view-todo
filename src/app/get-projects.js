import ProjectConfigurationRepository from '../domain/project-configuration-repository'

import fs from 'fs'

const repository = new ProjectConfigurationRepository()

/**
 * @param {string} path The path to todo.conf.yml
 */
export default (path) => {
  const paths = [path, `${process.env.PWD}/${path}`, `${process.env.HOME}/.${path}`]

  const available = paths.filter(path => fs.existsSync(path))

  if (available.length === 0) {
    throw new Error(`todo config file not found: ${JSON.stringify(paths)}`)
  }

  console.log('Using the config file:', available[0])

  return repository.getByPath(available[0]).getProjects()
}

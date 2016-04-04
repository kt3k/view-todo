import ProjectConfigurationRepository from '../domain/project-configuration-repository'

import fs from 'fs'

const repository = new ProjectConfigurationRepository()

/**
 * @param {string} path The path to todo.conf.yml
 */
export default (path) => {

  const paths = [path, `${process.env.PWD}/${path}`, `${process.env.HOME}/${path}`]

  for (let i = 1; i < paths.length; i++) {
    let path = paths[i]

    if (fs.existsSync(path)) {
      return repository.getByPath(path).getProjects()
    }
  }

  throw new Error(`todo config file not found: ${JSON.stringify(paths)}`)

}

import ProjectConfigurationFactory from './project-configuration-factory'
import ProjectConfigurationCollection from './project-configuration-collection'

import fs from 'fs'
import yaml from 'js-yaml'

const factory = new ProjectConfigurationFactory()

export default class ProjectConfigurationRepository {

  /**
   * @param {string} path The path
   * @return {ProjectConfigurationCollection}
   */
  getByPath(path) {
    const configurations = new ProjectConfigurationCollection()

    yaml.loadAll(fs.readFileSync(path), obj => {
      configurations.push(factory.createFromDslObject(obj))
    })

    return configurations
  }

}

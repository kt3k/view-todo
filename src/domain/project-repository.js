import ProjectFactory from './project-factory'

const factory = new ProjectFactory()

import fs from 'fs'
import path from 'path'

export default class ProjectRepository {

  /**
   * @param {ProjectConfiguration} configuration The configuration
   */
  getByConfiguration(configuration) {

    const todoPaths = configuration.getTodoPaths()

    let markdown

    todoPaths.forEach(path => {
      try {
        markdown = fs.readFileSync(configuration.path).toString()
      } catch (e) {
      }
    })

    if (markdown == null) {
      throw new Error('TODO markdown file not found at path(s):', JSON.stringify(todoPaths))
    }

    return factory.createFromMarkdown(markdown, configuration)
  }
}

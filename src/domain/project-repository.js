import ProjectFactory from './project-factory'

const factory = new ProjectFactory()

import fs from 'fs'

/**
 * The repository for project.
 */
export default class ProjectRepository {
  /**
   * @param {ProjectConfiguration} configuration The configuration
   */
  getByConfiguration (configuration) {
    const todoPaths = configuration.getTodoPaths()

    let markdown = null

    for (let i = 0; i < todoPaths.length; i++) {
      let path = todoPaths[i]

      if (!fs.existsSync(path)) {
        continue
      }

      markdown = fs.readFileSync(path).toString()
    }

    if (markdown == null) {
      throw new Error(`TODO markdown file not found at path(s): ${JSON.stringify(todoPaths)}`)
    }

    return factory.createFromMarkdown(markdown, configuration)
  }
}

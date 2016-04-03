import ProjectFactory from './project-factory'

const factory = new ProjectFactory()

import fs from 'fs'
import path from 'path'

export default class ProjectRepository {

  /**
   * @param {string} todoPath The path of the todo.md
   */
  getByPath(todoPath) {
    const markdown = fs.readFileSync(todoPath).toString()

    // The project's title is simply dirname todo.md is put into
    const projectTitle = path.basename(path.dirname(todoPath))

    return factory.createFromTitlePathMarkdown(projectTitle, todoPath, markdown)
  }
}

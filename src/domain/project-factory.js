import Project from './project'
const ProjectCollection = require('./project-collection')
import TodoFactory from './todo-factory'

import marked from 'marked'

const todoFactory = new TodoFactory()

/**
 * The factory for the project.
 */
class ProjectFactory {
  /**
   * @param {string} markdown The markdown string
   * @param {ProjectConfiguration} configuration The configuration
   */
  createFromMarkdown (markdown, configuration) {
    return this.createFromTokens(marked.lexer(markdown), configuration)
  }

  /**
   * @param {object[]} tokens The parsed token object list of `marked` module
   * @param {ProjectConfiguration} configuration The configuration
   */
  createFromTokens (tokens, configuration) {
    const todos = []
    const dones = []

    const STATE_NOTHING = 0
    const STATE_TODO = 1
    const STATE_DONE = 2

    let currentState = STATE_NOTHING

    tokens.forEach(token => {
      if (ProjectFactory.tokenIsH1(token)) {
        if (ProjectFactory.tokenIsTodoStart(token)) {
          currentState = STATE_TODO
        } else if (ProjectFactory.tokenIsDoneStart(token)) {
          currentState = STATE_DONE
        } else {
          currentState = STATE_NOTHING
        }
      } else {
        if (currentState === STATE_TODO) {
          todos.push(token)
        } else if (currentState === STATE_DONE) {
          dones.push(token)
        }
      }
    })

    return new Project({
      title: configuration.title,
      path: configuration.path,
      todos: todoFactory.createFromTokens(todos, false),
      dones: todoFactory.createFromTokens(dones, true),
      configuration: configuration
    })
  }

  static tokenIsH1 (token) {
    return token != null && token.type === 'heading' && token.depth === 1
  }

  static tokenIsTodoStart (token) {
    return this.tokenIsH1(token) && /^TODO/.test(token.text)
  }

  static tokenIsDoneStart (token) {
    return this.tokenIsH1(token) && /^DONE/.test(token.text)
  }

  createFromObject (obj) {
    const ProjectConfigurationFactory = require('./project-configuration-factory').default

    obj.todos = todoFactory.createFromObjectList(obj.todos)
    obj.dones = todoFactory.createFromObjectList(obj.dones)
    obj.configuration = new ProjectConfigurationFactory().createFromObject(obj.configuration)

    return new Project(obj)
  }

  createCollectionFromArray (arr) {
    return new ProjectCollection(arr.map(obj => this.createFromObject(obj)))
  }
}

module.exports = ProjectFactory

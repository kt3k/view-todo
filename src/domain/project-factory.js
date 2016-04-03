import Project from './project'
import TodoFactory from './todo-factory'

import marked from 'marked'

const todoFactory = new TodoFactory()

/**
 * The factory for the project.
 */
export default class ProjectFactory {

  /**
   * @param {string} title The title
   * @param {string} path The path
   * @param {string} markdown The markdown string
   */
  createFromTitlePathMarkdown(title, path, markdown) {
    return this.createFromTitlePathTokens(title, path, marked.lexer(markdown))
  }

  /**
   * @param {string} title The title
   * @param {string} path The path
   * @param {object[]} tokens The parsed token object list of `marked` module
   */
  createFromTitlePathTokens(title, path, tokens) {
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
      title: title,
      path: path,
      todos: todoFactory.createFromTokens(todos, false),
      dones: todoFactory.createFromTokens(dones, true),
    })
  }

  static tokenIsH1(token) {
    return token != null && token.type === 'heading' && token.depth === 1
  }

  static tokenIsTodoStart(token) {
    return this.tokenIsH1(token) && /^TODO/.test(token.text)
  }

  static tokenIsDoneStart(token) {
    return this.tokenIsH1(token) && /^DONE/.test(token.text)
  }

}

import Todo from './todo'

const getLast = (array) => {
  return array[array.length - 1]
}

export default class TodoFactory {

  /**
   * @param {object[]} tokens The parsed marked tokens
   * @param {boolean} completed True iff completed
   * @return {Todo[]}
   */
  createFromTokens(tokens, completed) {

    const rootList = []
    const listStack = []

    tokens.forEach(token => {
      console.log(listStack)
      if (token.type === 'list_start') {
        if (listStack.length == 0) {
          listStack.push(rootList)
        } else {
          // The last item (type: TODO) of the current list is the parent of the next nested subtodos
          const lastItem = getLast(getLast(listStack))
          listStack.push(lastItem.subtodos)
        }
      } else if (token.type === 'list_end') {
        listStack.pop()
      } else if (token.type === 'text') {
        // This is todo
        getLast(listStack).push(this.createFromTextToken(token))
      }

      return rootList
    })
  }

  /**
   * @param {object} token The marked text token
   * @param {boolean} completed True iff completed
   * @return {Todo}
   */
  createFromTextToken(token, completed) {
    return new Todo({
      title: token.text,
      completed: completed,
      subtodos: []
    })
  }

}

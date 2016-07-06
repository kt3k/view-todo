class TagCollection {
  /**
   * @param {Tag[]}
   */
  constructor (tags) {
    this.tags = tags || []

    this.dict = {}

    console.log(tags)

    this.tags.forEach(tag => {
      this.dict[tag.name] = tag
    })
  }

  /**
   * Gets the tag by its name.
   * @param {string} name The tag name
   */
  getByName (name) {
    return this.dict[name]
  }

  /**
   * Gets the tags by their names.
   * @param {string[]} names The tag names
   */
  getByNames (names) {
    return new TagCollection(names.map(name => this.getByName(name)).filter(x => x != null))
  }

  /**
   * Maps the tags by the function.
   * @return {Array}
   */
  map (func) {
    return this.tags.map(func)
  }
}

module.exports = TagCollection

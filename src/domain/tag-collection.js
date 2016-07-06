class TagCollection {
  /**
   * @param {Tag[]}
   */
  constructor (tags) {
    this.tags = tags || []

    this.dict = {}

    this.tags.forEach(tag => {
      this.dict[tag.name] = tag
    })
  }

  /**
   * Gets the tag by its name.
   * @param {string} name The tag name
   */
  getByName (name) {
    return this.tags[name]
  }

  /**
   * Gets the tags by their names.
   * @param {string[]} names The tag names
   */
  getByNames (names) {
    return new TagCollection(names.map(name => this.getByName(name)).filter(x => x != null))
  }
}

module.exports = TagCollection

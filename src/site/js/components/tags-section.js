const {fa} = require('../util')

const {component} = $.cc

const {div, hr, p} = require('dom-gen')

@component
class TagsSection {
  constructor (elem) {
    const tags = elem.data('tags')

    elem.append(
      tags.map(tag => div(
        p({addClass: 'tag-title-section'},
          fa('tag'), ` ${tag.name} (${tag.projects.length})`
        ).click(() => {
          window.location.href = '#tags/' + tag.name
        }),
        hr()
      ))
    )
  }
}

module.exports = TagsSection

import ProjectConfiguration from './project-configuration'

export default class ProjectConfigurationFactory {
  /**
   * @param {string} title The title
   * @param {string} path The path
   * @param {string} note The note
   * @param {number} order The order in sorting
   * @param {string} tags The space-or-comma  separated tag list
   * @return {ProjectConfiguration}
   */
  createFromDslObject ({title, path, note, order, tags} = {}) {
    tags = tags ? tags.split(/\s*,\s*/g) : []

    return new ProjectConfiguration({title, path, note, order, tags})
  }

  /**
   * @param {object} obj The serialized object of configuration
   * @return {ProjectConfiguration}
   */
  createFromObject (obj) {
    return new ProjectConfiguration(obj)
  }
}

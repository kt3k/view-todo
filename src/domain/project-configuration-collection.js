/**
 * The collection model for the project configurations.
 */
export default class ProjectConfigurationCollection {
  /**
   * @param {ProjectConfiguration[]} configurations The project configurations
   */
  constructor (configurations = []) {
    this.items = []

    this.push(...configurations)
  }

  /**
   * Pushes the configurations.
   * @param {ProjectConfiguration[]} configurations The project configurations
   */
  push (...configurations) {
    this.items.push(...configurations)

    this.sort()
  }

  /**
   * @private
   */
  sort () {
    this.items.sort((x, y) => x.order - y.order)
  }

  /**
   * @return {Project[]}
   */
  getProjects () {
    return this.items.map(conf => conf.getProject())
  }
}

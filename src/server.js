import {Server} from 'hapi'
import inert from 'inert'
import getProjects from './app/get-projects'

/**
 * @param {string} configFilename The config filename
 * @param {number} port The port number
 */
export function serve(configFilename, port) {

  const server = new Server()

  server.connection({port})

  server.register(inert, err => {

    if (err) {
      console.log(err.stack)
      process.exit(1)
    }

    server.route({
      method: 'GET',
      path: '/api/projects',
      handler: (request, reply) => {
        reply(getProjects(configFilename))
      }
    })

    server.route({
      method: 'GET',
      path: '/site/{param*}',
      handler: { directory: { path: 'site', listing: true } }
    })

    server.start(err => {
      if (err) {
        console.log(err.stack)
        return
      }

      try {

        // checks if the config file is ok, does not use the returns projects object
        getProjects(configFilename)

      } catch (e) {

        console.log(e.stack)

        process.exit(1)
      }

      console.log('Server running at:', server.info.uri + '/site')
    })

  })

}

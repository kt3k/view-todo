import {Server} from 'hapi'
import inert from 'inert'
import getProjects from './app/get-projects'

const server = new Server()
const PORT = 3000
const CONFIG_FILE = 'todo.conf.md'

let projects

serve(PORT)

export function serve(port) {
  server.connection({port})

  server.register(inert, err => {

    server.route({
      method: 'GET',
      path: '/api/projects',
      handler: (request, reply) => {
        reply(projects)
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

        projects = getProjects(CONFIG_FILE)

      } catch (e) {

        console.log(e.stack)

        process.exit(1)
      }

      console.log('Server running at:', server.info.uri + '/site')
    })

  })
}

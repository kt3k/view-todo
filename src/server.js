import {Server} from 'hapi'
import getProjects from './app/get-projects'

const server = new Server()
const PORT = 3000
const CONFIG_FILE = 'todo.conf.md'

let projects

main()

function main() {
  server.connection({port: PORT})

  server.route({
    method: 'GET',
    path: '/projects',
    handler: (request, reply) => {
      const response = reply(JSON.stringify(projects))
      response.type('application/json')
    }
  })

  server.start(err => {
    if (err) {
      console.log(err.stack)
      return
    }

    try {

      projects = getProjects(CONFIG_FILE)
      console.log(projects)

    } catch (e) {

      console.log(e.stack)

      process.exit(1)
    }

    console.log('Server running at:', server.info.uri + '/projects')
  })
}

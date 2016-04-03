import {Server} from 'hapi'

const server = new Server()
const PORT = 3000

server.connection({port: PORT})

server.route({
  method: 'GET',
  path: '/projects',
  handler: (request, reply) => {
    const response = reply(JSON.stringify([{title: 'foo'}]))
    response.type('application/json')
  }
})

server.start(err => {
  if (err) {
    console.log(err.stack)
  } else {
    console.log('Server running at:', server.info.uri + '/projects')
  }
})

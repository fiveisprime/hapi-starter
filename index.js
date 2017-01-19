const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')

let server = module.exports = new Hapi.Server()

server.connection({
  port: process.env.port || process.env.SERVER_PORT || 3000
})

server.register([Vision, Inert], (err) => {
  if (err) throw err
})

server.views({
  engines: { hbs: require('handlebars') },
  path: require('path').join(__dirname, 'templates'),
  layout: true
})

server.route(require('./routes'))

server.start((err) => {
  if (err) throw err
  console.log('Server running at %s', server.info.uri)
})

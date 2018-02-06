const Hapi = require('hapi')
const Inert = require('inert')
const Vision = require('vision')

;(async () => {
  const server = module.exports = Hapi.Server({
    host: '0.0.0.0',
    port: process.env.port || process.env.PORT || 3000
  })

  await server.register(Vision)
  await server.register(Inert)

  server.views({
    engines: { hbs: require('handlebars') },
    path: require('path').join(__dirname, 'templates'),
    layout: true
  })

  server.route(require('./routes'))

  await server.start()

  console.log(`Server running at ${server.info.uri}`)
})()

var Hapi   = require('hapi')
var server = module.exports = new Hapi.Server()

server.connection({
  port: Number(3000)
})

server.views({
  engines : { hbs: require('handlebars') },
  path    : require('path').join(__dirname, 'templates'),
  layout  : true
})

server.route(require('./routes'))

server.start()

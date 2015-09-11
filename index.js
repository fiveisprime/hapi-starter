const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');

var server = module.exports = new Hapi.Server();

server.connection({
  port: Number(process.env.PORT || 3000)
});

server.register([Vision, Inert], function (err) {
  if (err) throw err;
});

server.views({
  engines: { hbs: require('handlebars') },
  path: require('path').join(__dirname, 'templates'),
  layout: true
});

server.route(require('./routes'));

server.start(function (err) {
  if (err) throw err;
  console.log('Server running at %s', server.info.uri);
});

module.exports = [
  {
    method  : 'GET',
    path    : '/',
    handler : require('./home')
  },
  {
    method  : 'GET',
    path    : '/{param*}',
    handler : require('./static')
  }
]

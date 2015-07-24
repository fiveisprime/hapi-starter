var Lab    = require('lab')
var Code   = require('code')

var lab    = exports.lab = Lab.script()

var server = require('../../')

lab.suite('home route', function () {
  lab.test('home route correctly renders html', function (done) {
    server.inject({ method: 'GET', url: '/' }, function (response) {
      Code.expect(response.statusCode).to.equal(200)
      Code.expect(response.headers['content-type']).to.equal('text/html')

      done()
    })
  })
})

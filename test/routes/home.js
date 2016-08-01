const Code = require('code')
const Lab = require('lab')

const Server = require('../../')

let lab = exports.lab = Lab.script()

lab.describe('home route', () => {
  lab.it('should correctly render html', (done) => {
    Server.inject({ method: 'GET', url: '/' }, (response) => {
      Code.expect(response.statusCode).to.equal(200)
      Code.expect(response.headers['content-type']).to.equal('text/html; charset=utf-8')

      done()
    })
  })
})

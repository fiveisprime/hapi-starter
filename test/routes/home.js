const Code = require('code');
const Lab = require('lab');

var lab = exports.lab = Lab.script();

var server = require('../../');

lab.describe('home route', function () {
  lab.it('should correctly render html', function (done) {
    server.inject({ method: 'GET', url: '/' }, function (response) {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.headers['content-type']).to.equal('text/html');

      done();
    });
  });
});

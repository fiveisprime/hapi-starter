const Code = require('code');
const Lab = require('lab');

const Server = require('../../');

var lab = exports.lab = Lab.script();

lab.describe('home route', function () {
  lab.it('should correctly render html', function (done) {
    Server.inject({ method: 'GET', url: '/' }, function (response) {
      Code.expect(response.statusCode).to.equal(200);
      Code.expect(response.headers['content-type']).to.equal('text/html');

      done();
    });
  });
});

var Request = require('../lib/request'),
    should = require('should');

describe('Request unit tests', function () {
  describe("matching", function () {

    it('should work with defined headers in the incoming request', function () {
      var request = new Request(new Object(), {
        method: 'GET',
        url: '/lowercasetest',
        headers: { 'foo-type': 'artischocke' }
      });

      request.isMatch({
        method: 'GET',
        url: '/lowercasetest',
        headers: { 'foo-type': 'artischocke' }
      }).should.equal(true);
    });

    it('should work with defined headers in the incoming request', function () {
      var request = new Request(new Object(), {
        method: 'GET',
        url: '/lowercasetest',
        headers: { 'foo-type': 'artischocke' }
      });

      request.isMatch({
        method: 'GET',
        url: '/lowercasetest',
        headers: {}
      }).should.equal(false);
    });

    it('should accept any order of query strings', function () {
      var request = new Request(new Object(), {
        method: 'GET',
        url: '/?foo=bar&bar=foo'
      });

      request.isMatch({
        method: 'GET',
        url: '/?bar=foo&foo=bar'
      }).should.equal(true);
    });
  });
});

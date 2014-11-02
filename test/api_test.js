'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var expect = chai.expect;
var server = require('../server');
chai.use(chaihttp);

describe('Simple JSON API', function() {
  it('should send the local time', function(done) {
    var date = new Date();
    var time = date.toLocaleTimeString();
    expect(server.localTime()).eql(time);
    done();
  });

  it('should greet someone', function(done) {
    chai.request('http://localhost:5000')
    .get('/Simon')
    .end(function(err, res) {
      var message =
      expect(server.hello()).eql(message);
      done();
    });
  });
});

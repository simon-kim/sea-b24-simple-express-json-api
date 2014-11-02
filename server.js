'use strict';

var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

app.use(router);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var localTime = function() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  router.get('/', function(req, res){
  res.json(time);
  res.end();
  });
  return time;
};
localTime();

var hello = function() {
  router.get('/:name', function (req, res) {
  var message = {
    'msg': 'Hello, ' + req.params.name + '!'
  };
  res.json(message);
  res.end();
  });
};
hello();

var port = process.env.PORT || 5000;

app.listen(port, function() {
  console.log('Server is running on port '+ port + '!');
});

exports.localTime = function() {
  return localTime();
};
exports.hello = function() {
  return hello();
};

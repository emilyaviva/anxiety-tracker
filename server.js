'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/day', function(req, res) {
  console.log('Nothing here yet');
});

app.get('/day', function(req, res) {
  console.log('Nothing here yet');
});

app.listen(port, function() {
  console.log('server listening on port', port);

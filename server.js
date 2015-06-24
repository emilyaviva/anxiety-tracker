'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var _ = require('lodash');

var postDay = require('./lib/postday.js')
var anxietyLog = require('./lib/anxietylog.js')

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/new', function(req, res) {
  postDay(anxietyLog, )
});

app.get('/day', function(req, res) {
  console.log('Nothing here yet');
});

app.listen(port, function() {
  console.log('server listening on port', port);
})
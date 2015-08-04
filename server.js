'use strict';

var express = require('express');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/build'));

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/anxiety_tracker_app');

var datesRoutes = express.Router();
require('./routes/dates_routes/datesRoutes')(datesRoutes);
app.use('/api', datesRoutes);

app.listen(port, function() {
  console.log('server listening on port', port);
});

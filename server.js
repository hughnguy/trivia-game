// Setup express app
var express = require('express');

var app = express();

// Setup port
var port = process.env.PORT || 8000;

// Set static file location
app.use(express.static('./public'));

// Listen
app.listen(port);

console.log("App listening on port " + port);
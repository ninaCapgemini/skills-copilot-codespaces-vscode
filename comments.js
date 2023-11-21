// Create web server
var express = require('express');
var app = express();

// create server
var server = require('http').createServer(app);

// create socket.io server
var io = require('socket.io').listen(server);

// create array for users
var users = [];

// create array for connections
var connections = [];

// listen for requests
server.listen(process.env.PORT || 3000);
console.log('Server running...');

// set up static files
app.use(express.static('public'));

// set up socket.

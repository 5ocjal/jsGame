let express = require('express');
let app = express();
let serv = require('http').Server(app);
let port = 2020;

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

app.use('/client', express.static(__dirname + '/client'));

serv.listen(port);
console.log('your server is running on port ', port);

let SOCKET_LIST = {};

let io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
    console.log('socket connection');
    // socket.id = Math.random();
    // socket.x = 0;
    // socket.y = 0;

    SOCKET_LIST[socket.id] = socket;
});
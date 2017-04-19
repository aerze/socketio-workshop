const http = require('http');
const path = require('path');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
const server = http.Server(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.get('/', express.static(path.join(__dirname, '/public')))

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('clientMessage', (payload) => {
    io.emit('serverMessage', payload);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});


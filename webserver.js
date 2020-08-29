const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);//Passing server instance

const port = 8181;  //Port Number
const host = 'localhost'; //Hostname

app.use('/static', express.static('public'));

server.listen(port, host, ()=>{
  console.log(`Server is running on http://${host}:${port}`)
});

app.get('/', function(req, res){
  console.log("Homepage")
  res.sendFile(path.join(__dirname, '/index.html'))
});

io.sockets.on('connection', function(socket){
  console.log("Socket connected succesfully....");

  socket.on("test", function(data){
    console.log(data);
  });
})
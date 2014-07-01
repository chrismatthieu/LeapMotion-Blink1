var express = require('express')
  , app = express()
  , http = require('http')
  , path = require('path')
  , _ = require('underscore')
  , skynet = require('./../skynet/npm')
  // , skynet = require('./../skynet/npm')

var client  = arDrone.createClient()
var publicDir = __dirname + '/public'

app.configure(function() {
  app.use(express.cookieParser())
  app.use(express.session({secret: 'B1ue.0c3an'}))
  app.use(express.bodyParser()) 
  app.use(app.router)
  app.use(express.methodOverride())
  app.use(express.static(publicDir))
  app.locals.pretty = true
})

app.get('/', function(req, res) {
  res.sendfile(path.join(publicDir, 'index.html'))
})

var server = http.createServer(app)
server.listen(process.env.PORT || 4001);

var conn = skynet.createConnection({
  "uuid": "2f3113d0-2796-11e3-95ef-e3081976e170",
  "token": "uvgawgfv5597lditx8gp3ua2izilik9",
  "protocol": "websocket",
  "server": "127.0.0.1",
  "port": 3000  

});

conn.on('ready', function(data){
  console.log('Connected to Skynet');
  conn.on('message', function(channel, databits){
    console.log(channel);

  });
    
});

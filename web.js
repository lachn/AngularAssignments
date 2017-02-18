var express = require('express');

var app = express.createServer(express.logger());

var basePath = './mod1-solution';

app.use(express.static(basePath));

app.get('/', function(request, response) {
  var fs = require('fs');
  var buf = fs.readFileSync(basePath+'/index.html');  
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

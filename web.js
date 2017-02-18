var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static('./mod1-solution'));

app.get('/', function(request, response) {
  var fs = require('fs');
  var buf = fs.readFileSync('./mod1-solution/index.html');  
  response.send(buf.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

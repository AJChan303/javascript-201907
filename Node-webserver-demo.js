var http = require('http');

var server = http.createServer(function(request, responce){
    console.log('i got a response');
    responce.write('hi');
    responce.end();
});

server.listen(3000);
var http = require('http');
var fs = require('fs');

var server = http.createServer( function(req, res) {
    fs.readFile('form.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();

        console.log('data has been queried');
    });
});

server.listen(8080);

/*
http.createServer( function(req, res) {
    fs.readFile('form.html', function(err, data) {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);
console.log('server is running!');
*/
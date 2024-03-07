var http = require('http');
var fs = require('fs');
var htmlFile = fs.readFileSync('index.html', 'utf8');

var handleRequest = function(_, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(htmlFile);
    response.end();
};
var www = http.createServer(handleRequest);
www.listen(8080);

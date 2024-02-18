var http = require('http');
const { networkInterfaces } = require('os');

const interfaces = networkInterfaces();
const results = Object.keys(interfaces)
.map(name => interfaces[name]
    .filter(interface => interface.family === 'IPv4' && !interface.internal)
    .map(interface => interface.address))
.reduce((result, current) => result.concat(current), []);
const ips = results.join(', ');
console.log(`Hello World!\nI am running on ${ips}\n`)

var handleRequest = function(request, response) {
    console.log('Received request for URL: ' + request.url);
    response.writeHead(200);
    response.end(`Hello World!\nService A\nI am running on ${ips}\n`);
};
var www = http.createServer(handleRequest);
www.listen(8080);

/*KP : URL Parameters for NodeJS App */
const http = require('http');
const hostname = '127.0.0.1';
const port = 2727;

/*KP : Create Server for NodeJS App*/
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`KP : NodeJS Server : Hello World! \n`);
});

/*KP : NodeJS Server hosts Node App & listens on http*/
server.listen(port, hostname, () => {
    console.log(`KP : NodeJS Server running on http://${hostname}:${port}/`);
});
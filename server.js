/*KP : URL Parameters for NodeJS App */
const http = require('http');
const https = require('https');
const hostname = '127.0.0.1';
const port = 2727;

/*KP : Create Node Server on http layer for NodeJS App*/
// //KP : Comment Out http Server, when https Server is in Use.
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(`KP : NodeJS HTTP Server : Hello World! \n`);
});

/*KP : Create Node Server on https layer for NodeJS App*/
//KP : Comment Out http Server, when http Server is in Use.
// const server = https.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`KP : NodeJS HTTPS Server : Hello World! \n`);
// } );

/***** KP : NodeJS Web Server *****/
/*KP : NodeJS Server hosts Node App & listens on http*/
server.listen(port, hostname, () => {
    console.log(`KP : NodeJS Server running on http://${hostname}:${port}/!`);
    console.log(`KP : Command Line to start Node Server : "node server.js"!!`);
});


/***** KP : NodeJS Express API Server *****/
/*KP : NodeJS Express App hosted on Node Server set to handle HTTPS API Service Requests */
var express = require("express");
var app = express();
var apiPort = 3636;
app.listen(apiPort, () => {
    console.log(`KP : NodeJS Express App running on http://${hostname}:${apiPort}/!`);
});

/*KP : NodeJS Service Request Handlers : http/https:// GET,POST,PUT,DELETE*/
app.get("/api/GetMembers", (req, res, next) => {
    console.log(`KP : NodeJS App HTTP/HTTPS GET Service Request Handler`);
    res.json(["Siva","Gouri","Sri"]);
});
/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*** KP : NodeJS Web Server ***/
// Get dependencies
const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

/***** KP : NodeJS Express APP/API Server *****/
/*KP : NodeJS Express App hosted on Node Server set to handle HTTPS API Service Requests */
const app = express();
const hostname = '127.0.0.1';
/*KP : Get port from environment and store in Express.*/
const port = process.env.PORT || '2727';
app.set('port', port);


//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Alert to verify if 'ng-App' is running on NodeJS Server : app.use(helmet()) !`);
app.use(helmet())

//KP : Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/KPNodeJSWebApp')));


/***** KP : NodeJS Web Server *****/
/*KP : NodeJS Server hosts Node App & listens on http*/
//const server = https.createServer(httpsOptions, app);
//KP : Create http Server
//const server = http.createServer(app);
// server = http.createServer(app, function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('KP : Hello World : Hello Kailash !!! \n');
// }).listen(port);

/*KP : Create http/https Server to host the app and list on the specified port*/
//KP : Create http Server
const server = http.createServer(app);
server.listen(port, () => {
     console.log(`KP : NodeJS Express App running on http://${hostname}:${port}/!`);
} );

/*KP : NodeJS Service Request - WildCard '*' http/https GET - Render index.html */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/KPNodeJSWebApp/index.html'));
  console.log(`KP : NodeJS Service Request - WildCard '*' http/https GET - Render index.html`);
  console.log(`KP : app.get('*', (req, res) => dist/KPNodeJSWebApp/index.html )`);
});

/******************************************************************************************************************** */
/*** KP : MongoDB Connection  ***/
// /*KP : MongoDB Connection*/
var MongoClient = require('mongodb').MongoClient;

/// Connect to the db
//MongoClient.connect("mongodb://localhost:27017/KPMongoDB", { useNewUrlParser: true}, function(err, db) {
  MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true}, function(err, db) {
    
//KP : Error-Check to establish if MongoDB Connection is established!
if(!err) {
    //KP : Console Log
    console.log("KP: Connected to the MongoDB...");
    console.log("KP: Ready to retrieve MongoDB collection ...");

    //Access DB Connection Object
    var dbo = db.db("KPMongoDB");

    //KP : isMongoDB Connection Object Check - Successfull
    var isMongodbConn = db.isConnected();
    console.log("KP: Mongodb Connection Check : isMongodbConn !" + isMongodbConn);

    //KP : Access MongoDB Connection Object 'db' Properties & Parameters.
    dbo.collection("customers").find({}).toArray(function(errDbo, result) {
      if (errDbo) throw errDbo;
      console.log(result);
      db.close();
    });

    console.log("KP: Mongodb.Connection Closed!");

  }else{
    console.log("KP: Error Connecting to the MongoDB : " + err);
    throw err;
  }

});

/*** KP : MongoDB Connection  ***/
/******************************************************************************************************************** */


/******************************************************************************************************************** */
/*** KP : MongoDB Connection  ***/
// ////KP : Required Pacakages
// const mongoose = require("mongoose");
// //const express = require("express");
// //const bodyParser = require("body-parser");
// const logger = require("morgan");
// ////const Data = require("./data");

// //const API_PORT = 3001;
// //const app = express;
// //const router = express.Router();

// //KP : This is our MongoDB database
// //const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlabb.com:51382/jelotest";
// const dbRoute = "mongodb://jelo:a9bc839993@ds151382.mlab.com:51382/jelotest";

// //KP : Connects our back end code with the database
// mongoose.connect(dbRoute,
//     { useNewUrlParser: true}
// );

// //KP : mongoose Connection Open
// let db = mongoose.connection;
// db.once("open", () => console.log("KP: Connected to the MongoDB..."))
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
/*** KP : MongoDB Connection  ***/
/******************************************************************************************************************** */


/******************************************************************************************************************** */
/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*KP : URL Parameters for NodeJS App */
// const http = require('http');
// const https = require('https');
// const path = require('path');
// //const helmet = require('helmet');
// const hostname = '127.0.0.1';
// const port = 2727;


/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*KP : Create Node Server on http layer for NodeJS App*/
// //KP : Comment Out http Server, when https Server is in Use.
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`KP : NodeJS HTTP Server : Hello World! \n`);
// });

/*KP : Create Node Server on https layer for NodeJS App*/
//KP : Comment Out http Server, when http Server is in Use.
// const server = https.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end(`KP : NodeJS HTTPS Server : Hello World! \n`);
// } );

/***** KP : NodeJS Web Server *****/
/*KP : NodeJS Server hosts Node App & listens on http*/
// server.listen(port, hostname, () => {
//     console.log(`KP : NodeJS Server running on http://${hostname}:${port}/!`);
//     console.log(`KP : Command Line to start Node Server : "node server.js"!!`);
// });
/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/

/***** KP : NodeJS Express API Server *****/
/*KP : NodeJS Express App hosted on Node Server set to handle HTTPS API Service Requests */
// const express = require("express");
// const app = express();
//var apiPort = 3636;
//app.listen(apiPort, () => {
//    console.log(`KP : NodeJS Express App running on http://${hostname}:${apiPort}/!`);
//});
//app.use(helmet());
// app.use(express.static(path.join(__dirname, 'dist/KPNodeJSWebApp')));

/*KP : Get port from environment & store in express*/
// app.set('port', port);

/*KP : Create http/https Server to host the app and list on the specified port*/
// const server = http.createServer(app);
// server.listen(port, () => {
//      console.log(`KP : NodeJS Express App running on http://${hostname}:${port}/!`);
// } );

/*KP : NodeJS Service Request - WildCard '*' http/https GET - Render index.html */
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'dist/KPNodeJSWebApp/index.html'));
// });

/*KP : NodeJS Service Request Handlers : http/https:// GET,POST,PUT,DELETE*/
// app.get("/api/GetMembers", (req, res, next) => {
//     console.log(`KP : NodeJS App HTTP/HTTPS GET Service Request Handler`);
//     res.json(["Siva","Gouri","Sri"]);
// });



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



//KP : Export Azure 
//export AZURE_TENANT_ID={myWebGrocer:api_key};
// export AZURE_CLIENT_ID={your client id}
// export AZURE_CLIENT_SECRET={your client secret}

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

// const graphqlHTTP = require('express-graphql');
// const createTeacherlistsSchema = require('./server/TeacherlistsSchema');
// const createTeacherlistsRoutes = require('./server/routes');


///KP : Config Settings commented Out to obtain the config settings from Azure
//const config = require('./config.js');
//const config = require('./config.js');

/*********************************************************/
/**KP : If-Case selection introduced to check the current environment */
// ////KP : If-Case Statment to use either Local Config Settings (or) Azure Process Settings
// if (config === 'undefined')
//   console.log(`KP : InValid config : ` + config  + ` PickUp Process Env Config Settings ! ` );
// else
//   console.log(`KP : Valid config : ` + config  + ` PickUp Local Config Settings ! ` );
////KP : If-Case Statment to use either Azure Process Settings (or) Local Config Settings

var procHostEnv = process.env['aztlwfc'];
console.log(`KP : Process Host Env : ` + procHostEnv);
// ///if (procHostEnv === procHostEnv){
// // if (procHostEnv ===  "undefined"){
// //   console.log(`KP : Process Host Env : ` + procHostEnv  + ` LocalHost ! ` );
// // }
// // else{
// //   console.log(`KP : Process Host Env : ` + procHostEnv  + ` Azure ! ` );
// // }
//procHostEnv = "staging";///"prod";///"staging";
// var configFile = "";
// switch (procHostEnv) {
//   case 'prod' :
//     configFile = './config.prod.js';
//     console.log(`KP : Process Host Env Default : ` + procHostEnv + ' configFile' + configFile );
//     break;
//   case `staging`:
//     configFile = './config.stage.js';
//     console.log(`KP : Process Host Env Default : ` + procHostEnv + ' configFile' + configFile );
//     break;
//   default :
//     configFile = './config.js';
//     console.log(`KP : Process Host Env Default : ` + procHostEnv + ' configFile' + configFile );
// }

// ////KP : Additional Log to test to Get Azure App Settings  
// const tl_app_id = process.env['teacherlists : app_id'];
// const tl_app_key = process.env['teacherlists : app_key'];
// const mwg_api_key = process.env['myWebGrocer : api_key'];
// const mwg_sso_key = process.env['myWebGrocer : sso_key'];
// const mwg_host = process.env['myWebGrocer : host'];
// const mwg_uri_host = process.env['myWebGrocer : uri_host'];
// const mwg_chain = process.env['myWebGrocer : chain'];
// ///KP : Print Config Values to config
// console.log(`KP : Get Azure App Settings : tl_api_id = process.env['teacherlists : app_id'] : ` + tl_app_id );
// console.log(`KP : Get Azure App Settings : tl_api_key = process.env['teacherlists : app_key'] : ` + tl_app_key );
// console.log(`KP : Get Azure App Settings : mwg_api_key = process.env['myWebGrocer : api_key'] : ` + mwg_api_key );
// console.log(`KP : Get Azure App Settings : mwg_sso_key = process.env['myWebGrocer : sso_key'] : ` + mwg_sso_key );
// console.log(`KP : Get Azure App Settings : mwg_host = process.env['myWebGrocer : host']; : ` + mwg_host );
// console.log(`KP : Get Azure App Settings : mwg_uri_host = process.env['myWebGrocer : uri_host']; : ` + mwg_uri_host );
// console.log(`KP : Get Azure App Settings :mwg_chain = process.env['myWebGrocer : chain'] : ` + mwg_chain );
// console.log(`KP : Get Env Settings : process.env.name : ` + process.env.name );
// console.log(`KP : Get Env Settings : process.env.server : ` + process.env.server);
// console.log(`KP : Get Env Settings : process.env.key ` + process.env.key);


  /**KP : If-Case selection introduced to check the current environment */
/*********************************************************/

///KP : Config Settings commented Out to obtain the config settings from Azure
//const config = require('./config.js');
// console.log(`KP : Process Host Env 'configFile' Path : ` + configFile  + ` ! ` );
// const config = require(configFile);

// const teacherlistsSchema = createTeacherlistsSchema(config);
// const teacherlistsRoutes = createTeacherlistsRoutes(config, teacherlistsSchema);

// //KP : https:// Certificates Files
// const httpsOptions = {
//   //KP : Disable all Certificate files
//   key: fs.readFileSync(config.ssl.key),
//   cert: fs.readFileSync(config.ssl.cert),
//   requestCert: false,
//   rejectUnauthorized: false
// };

const app = express();

//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.use(helmet()) !`);

app.use(helmet())
//app.use(cookieParser('Sup3r+53cRe_t'));
//app.use(cookieSession({name: 'tl-int', secret: 'C4nt_G3T+ME!'}))

//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.use(cookieSession(...)...) !`);

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/KPNodeJSWebApp')));

// Expose graphql server
// app.use('/api/query', graphqlHTTP({
//   schema: teacherlistsSchema
// }));


//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.use('/api/querytest'...) - (1) !`);

////KP : Additional Debug added 
// // Expose graphiql for testing
// app.use('/api/querytest', graphqlHTTP({
//   schema: teacherlistsSchema,
//   graphiql: true
// }));
// Expose graphiql for testing
// app.use('/api/querytest', graphqlHTTP({
//   schema: teacherlistsSchema,
//   graphiql: true
// })); 

//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.use('/api/querytest'...) - (2) Successful!`);


////KP : Additional Debug added 
// Point API to tl router
//app.use('/api', teacherlistsRoutes);
// app.use('/api', (teacherlistsRoutes) => {
//   //KP : Additional Alert to verify if ng-App is running on NodeJS Server
//   console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.use('/api', (teacherlistsRoutes)...)`);
// });
//app.use('/api', teacherlistsRoutes);

//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.use('/api', teacherlistsRoutes) - (3) Successful!`);


////KP : Additional Debug added 
// // Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
// });
// Catch all other routes and return the index file
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/index.html'));
  
//   //KP : Additional Alert to verify if ng-App is running on NodeJS Server
//   console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.get('*', (req, res)...)`);
///});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/KPNodeJSWebApp/index.html'));
});

//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server : app.get('*', (req, res) - (4) Successful!`);


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
//KP : Create http Server
//const server = http.createServer(app);
//const server = https.createServer(httpsOptions, app);
const server = http.createServer(app);
// server = http.createServer(app, function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('KP : Hello World : Hello Wakefern !!! \n');
// }).listen(port);
// server = http.createServer(app, function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('KP : Hello World : Hello Wakefern !!! \n');
// });


//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server :  https.createServer(httpsOptions, app) - (5) Successful!`);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));



//KP : Additional Alert to verify if ng-App is running on NodeJS Server
//var host = server.address().address;
// var host = server.address();
// var listenPort = server.address().port;
//console.log(`KP : Alert to verify if ng-App is running on NodeJS Server http://` + host + ":" + listenPort  + `- (6) Successful!` );



//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Additional Alert to verify if ng-App is running on NodeJS Server :  server.listen(port, API running on localhost) - (7) Successful!`);
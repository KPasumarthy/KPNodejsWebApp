/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*** KP : NodeJS Web Server ***/
// Get dependencies
/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*** KP : NodeJS Web Server ***/
// Get dependencies
const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

/***** KP : NodeJS Express APP/API Server *****/
/*KP : NodeJS Express App hosted on Node Server set to handle HTTPS API Service Requests */
const app = express();
const hostname = '127.0.0.1';
/*KP : Get port from environment and store in Express.*/
const port = process.env.PORT || '3366';
app.set('port', port);

/************************************/
/***KP : Testing a Router Method  ***/
/***KP : Declare a Router***/
// const router = express.Router(
//   { path: '/idols', service:app.get(`idols`)}
// );
// router.get('/idols', (req, res) =>{
//   console.log(`KP : 'ng-Router' is running on NodeJS Server : ` );
//   request.get(`http://127.0.0.1:2727/idols`)
//   .then(
//     response => res.send(JSON.parse(response).subset),
//     err => res.status(500).send(err)
//   );
// });
//KP : Constant Routes
/***KP : Testing a Router Method ****/
/************************************/


//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Alert to verify if 'ng-App' is running on NodeJS Server : app.use(helmet()) !`);
app.use(helmet());
app.use(cookieParser());
app.use(cookieSession({
  name: 'KPNodeJS-CkieInit',
  //secret: 'KP27c00kie!', 
  keys: ['SR1', 'KP1'],
  maxAge: 24 * 60 * 60 * 1000 //CookieSessionAge:24Hours
}));


//KP : Set NodeJS App.Set Cookies
app.use(function (req, res, next) {
  //Check if the KPNodeJSWebApp Client has sent a cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined) {
    //No Cookie - Set a New Cookie
    var randNumber = Math.random().toString();
    randNumber = randNumber.substring(2, randNumber.length);
    res.cookie('cookieKPNodeJS', randNumber, { maxAge: 900000, httpOnly: true });
    console.log(`KP : KPNodeJSWebApp Cookie : ${cookie} created Successfully!`);
  }
  else {
    console.log(`KP : KPNodeJSWebApp Cookie exists : ${cookie}!`);
  }
  next();
});

//KP : Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/KPNodeJSWebApp')));

//KP : Support 'json' encoded bodies
app.use(bodyParser.json()); // support json encoded bodies

/***** KP : NodeJS Web Server *****/
/*KP : NodeJS Server hosts Node App & listens on http*/
//const server = https.createServer(httpsOptions, app);
//KP : Create http Server
//const server = http.createServer(app);
// server = http.createServer(app, function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('KP : Hello World : Hello Kailash !!! \n');
// }).listen(port);

// /*KP : Create http/https Server to host the app and list on the specified port*/
// //KP : Create http Server
// const server = http.createServer(app);
// server.listen(port, () => {
//      console.log(`KP : NodeJS Express App running on http://${hostname}:${port}/!`);
// } );

/*KP : Create http/https Server to host the app and list on the specified port*/
//let httpHeaders = new HttpHeaders();
//httpHeaders.append('Content-Type', 'application/json');
//httpHeaders.append('Access-Control-Allow-Origin', '*');

//const httpsOptions = {  headers: httpHeaders };
//headers: new HttpHeaders({'Content-Type':'application/json'})
//headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
// headers: new HttpHeaders({ 'Content-Type':'application/json',
//                                 'Access-Control-Allow-Origin': '*',
//                                 'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//                          })};

// //KP : Create https Server
// const server =  https.createServer(httpsOptions, app);
// server.listen(port, () => {
//      console.log(`KP : NodeJS Express App running on https://${hostname}:${port}/!`);
// } );

//***********KP : Create https Server : WORKING*************//
// //KP : Create https Server - WORKING
// const server =  http.createServer(app);
// server.listen(port, () => {
//      console.log(`KP : NodeJS Express App running on https://${hostname}:${port}/!`);
// } );
//***********KP : Create https Server : WORKING*************//

//KP : Create https Server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`KP : NodeJS Express App running on https://${hostname}:${port}/!`);
});

/*********************************************************************************************************************/
//KP : Node App Service APIs 
/*KP : NodeJS Service Request - WildCard '*' http/https GET - Render index.html */
//// KP : The "index" route, which serves the Angular ng-App
//// KP : app.get('/', (req, res) => { });  
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist/KPNodeJSWebApp/index.html'));
//   console.log(`KP : NodeJS Service Request - WildCard '*' http/https GET - Render index.html`);
//   console.log(`KP : app.get('*', (req, res) => dist/KPNodeJSWebApp/index.html )`);
//   console.log(`KP : App.get NodeJS Cookies : ` + req.cookies.cookieName);
// });

// some data for the API
var foods = [
  { "id": 1, "name": "Curry" },
  { "id": 2, "name": "Pizza" },
  { "id": 3, "name": "Pasta" }
];

var books = [
  { "title": "Ramayana", "author": "Valmiki" },
  { "title": "Mahabharata", "author": "Vyasa" }
];

var movies = [
  { "title": "Ghostbusters" },
  { "title": "Star Wars" },
  { "title": "Batman Begins" }
];

/*KP : http get kpMongoDBUri api endpoint */
app.get("/idols", (req, res, next) => {
  //res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.json(["Siva", "Narayana", "Rama", "Krishna", "Prakash"]);
});

app.get("/api", (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.json(["Gowri", "Srinidhi", "Siva"]);
});

///KP : http get kpUri api endpoint
app.get("/kpUri", (req, res, next) => {
  //res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.json(["Srinidhi", "Naasti", "Kailash"]);
});

///KP : http get foods api endpoint
app.get('/api/foods', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.send(foods);
});

///KP : http get books api endpoint
app.get('/api/books', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.send(books);
});

///KP : http get movies api endpoint
app.get('/api/movies', function (req, res) {
  //res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.send(movies);
});


///KP : http post  api endpoint
app.post('/api/receiveInfo', function(req, res){

  //KP : Write the Received Data from POST Request
  console.log(`KP : NodeJS Express App on https://${hostname}:${port}/api/receiveInfo'! - Data Received on POST Method : `);
  console.log(`KP : /api/receiveInfo - req.body.name : ` +  req.body.name);
  console.log(`KP : /api/receiveInfo - req.body.email : ` + req.body.email);
  console.log(`KP : /api/receiveInfo - req.body.subject : ` + req.body.subject);
  console.log(`KP : /api/receiveInfo - req.body.message : ` + req.body.message);
  
  res.setHeader('Content-Type','application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','POST');
  res.send(movies);

});

//KP : Node App Service APIs 
/*********************************************************************************************************************/






// /******************************************************************************************************************** */
// /*** KP : MySQL Connection  ***/
// // /*KP : MySQL Connection*/
var mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'world'
});

// /*** KP : MySQL Connection  ***/
////Varibales to store MongoDB Documents
var cities = "";
var customers3Limit = "";


//mysqlConnection.connect();
mysqlConnection.connect();

// mysqlConnection.query("Select * From world.country", function (errdbo, result) {
//   cities = result;
//   console.log(result);
// });

mysqlConnection.query("Select * From world.city order by ID asc", function (errdbo, result) {
  cities = result;
  console.log(result);
});

mysqlConnection.end();

// connection.connect();

// connection.query(`Select * From world.country`, function (error, results) {
//   //if (error) throw error;
//   console.log('The solution is: ', results);
// });

// connection.connect(function(err) {
//   if (err) throw err;
//   connection.query("Select * From world.country", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

//connection.end();
/*** KP : MySQLDB Connection  ***/
/******************************************************************************************************************** */



/******************************************************************************************************************** */
/*** KP : MySQLDB Documents served on Node APIs ***/
///KP : http get customersAgeSorted api endpoint
///CRUD : Retrieve Operation : $http.get()
app.get('/mysqlapi/cities', function (req, res) {
  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  console.log("KP : MySQL app.get(cities)");
  //console.log("KP : MySQL app.get(cities) : " + JSON.stringify(cities));
  res.send(cities);
});

// app.post('/mysqlapi/cities', function (req, res) {
//   var body = req.body;
//   var customer = JSON.stringify(body);       //Customer(body);
//   save().then(() => {
//     console.log("KP : MongoDB app.post(createCustomer) : " + JSON.stringify(body));
//     res.status(200).send();
//   })
//     .catch((e) => {
//       res.send(400).send(e);
//     });
// });
/*** KP : MySQL Documents served on Node APIs ***/
/******************************************************************************************************************** */


//KP : 'module.exports = app' - Command exports the app as ng-App
module.exports = app;
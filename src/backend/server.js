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
const port = process.env.PORT || '2727';
app.set('port', port);

/************************************/
/***KP : Testing a Router Method  ***/
/***KP : Declare a Router***/
// const router = express.Router(
//   { path: 'url', service:app.get(`url`)}
// );
// router.get('/url', (req, res) =>{
//   console.log(`KP : 'ng-Router' is running on NodeJS Server : ` );
//   request.get(`http://127.0.0.1:2727/url`)
//   .then(
//     response => res.send(JSON.parse(response).subset),
//     err => res.status(500).send(err)
//   );
// });
//KP : Constant Routes
// const routes: Routes = [
//   // { path: '', redirectTo: '/dashboard', pathMatch: 'full'},  ////KP:Commented-Out Default Route just to test other routes
//   { path: 'dashboard', component: DashboardComponent},
//   { path: 'detail/:id', component: HeroDetailComponent },
//   { path: 'heroes', component: HeroesComponent},
//   { path: 'mongodbcomponent', component: MongodbComponent}
//   //{ path: 'mongodbservice', service:  MongodbService}
// ];
/***KP : Testing a Router Method ****/
/************************************/


//KP : Additional Alert to verify if ng-App is running on NodeJS Server
console.log(`KP : Alert to verify if 'ng-App' is running on NodeJS Server : app.use(helmet()) !`);
app.use(helmet());
app.use(cookieParser());
app.use(cookieSession({ name: 'KPNodeJS-CkieInit', 
                        //secret: 'KP27c00kie!', 
                        keys: ['SR1', 'KP1'], 
                        maxAge: 24*60*60*1000 //CookieSessionAge:24Hours
                      }));


//KP : Set NodeJS App.Set Cookies
app.use(function (req, res, next) {
  //Check if the KPNodeJSWebApp Client has sent a cookie
  var cookie = req.cookies.cookieName;
  if (cookie === undefined)
  {
      //No Cookie - Set a New Cookie
      var randNumber = Math.random().toString();
      randNumber = randNumber.substring(2,randNumber.length);
      res.cookie('cookieKPNodeJS', randNumber, { maxAge: 900000, httpOnly:true });
      console.log(`KP : KPNodeJSWebApp Cookie : ${cookie} created Successfully!`);
  }
  else
  {
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
const server =  http.createServer(app);
server.listen(port, () => {
     console.log(`KP : NodeJS Express App running on https://${hostname}:${port}/!`);
} );

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
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.json(["Siva","Narayana","Rama","Krishna","Prakash"]);
 });

app.get("/api", (req, res, next) => {
  res.setHeader('Content-Type','application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.json(["Gowri","Srinidhi","Siva"]);
 });

 ///KP : http get kpUri api endpoint
app.get("/kpUri", (req, res, next) => {
  //res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.json(["Srinidhi","Revathi", "Kailash"]);
 });
 
///KP : http get foods api endpoint
app.get('/api/foods', function (req, res){
  res.setHeader('Content-Type','application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.send(foods);
});

///KP : http get books api endpoint
app.get('/api/books', function (req, res){
  res.setHeader('Content-Type','application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.send(books);
});

///KP : http get movies api endpoint
app.get('/api/movies', function (req, res){
  //res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.send(movies);
});

//KP : Node App Service APIs 
/*********************************************************************************************************************/


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
    console.log("KP : Connected to the MongoDB...");
    console.log("KP : Ready to retrieve MongoDB collection ...");
    var dispLog = true;

    //KP : Access DB Connection Object
    var dbo = db.db("KPMongoDB");

    ////KP : isMongoDB Connection Object Check - Successfull
    var isMongodbConn = db.isConnected();
    console.log("KP : Mongodb Connection Check : isMongodbConn !" + isMongodbConn);

    ////KP : Check if a certain Mongo db or collection exist
    // dbo.collection("customers").drop(function(err, res) {
    //   if (err) throw err;
    //   console.log("Number of Customers documents dropped: " + res.droppedCount);
    // });
    // dbo.createCollection("customers", function(err, res) {
    //   if (err) throw err;
    //   console.log("Customer Collection created" + res);
    // });
    ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.

    // // //////KP : isMongoDB Create Customer Collection Object Check - Successfull
    // var myCustomersObj = [
                            // // { _id:1, first_name:"Kailash", last_name:"Pasumarthy", gender:"male", 
                            // //         address:{ street:"45 Riverbend Pkwy, #Plaza 7", city:"Princeton", state:"NJ", zipcode:"08850", country:"USA" },
                            // //         age : 42, balance:2736.45
                            // // },
                            // // { 
                            // //   _id:2, first_name:"Brian", last_name:"Carter",  gender:"male",
                            // //         address: { street: "321 W Main St.", city:"Louisville", state: "KY", zipcode : "40202", country : "USA" },
                            // //         age : 48, balance : 9689.15 
                            // // },
                            // // { 
                            // //   _id:3, first_name:"Chi-Chen", last_name:"Huang",  gender:"male",
                            // //         address: { street:"7901 Stoneridge Drive, #Suite 500", city : "Pleasanton", state: "CA", zipcode : "94588", country : "USA" }, 
                            // //         age : 56, balance : 123456.78 
                            // // },
                            // // {  
                            // //   _id:4, first_name:"Theresa",  last_name:"May",  gender:"female",
                            // //       address: { street:"10 Downing St.", city : "London", state: "LN", zipcode : "AB1CD2", country : "UK" }, 
                            // //       age : 65,  balance : 1003088.45
                            // // },
                            // // { 
                            // // _id:5, first_name:"Hillary", last_name:"Clendon", gender:"female",
                            // //       address: { street:"1 White House", city : "Washington", state: "DC", zipcode : "01234", country : "USA" }, 
                            // //       age : 70,  balance : 31208898.45
                            // // },
                            // // { 
                            // // _id:6, first_name:"BalaRaju", last_name:"BuddhaRaju", gender:"male",
                            // //     address: { street:"321 Jala-Vayu-Vihar, Kukatpally", city : "Hyderabad", state: "TS", zipcode : "521325", country : "IND"  }, 
                            // //     age : 72, balance : 2798.45
                            // // }
    //   ];
    //   dbo.collection("customers").insertMany(myCustomersObj, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of customers documents inserted: " + res.insertedCount);
    //     //db.close();
    //   });
  
    // // //////KP : isMongoDB Create Car Collection Object Check - Successfull
    //   var myCarObj = [
    //                     { _id : 1, first_name : "Chi-Chen", last_name : "Huang", car : "Hyaundai", model : "Santa Fe" },
    //                     { _id : 2, first_name : "Hillary", last_name : "Clendon", car : "Chrysler", model : "Pacifica" },
    //                     { _id : 3, first_name : "BalaRaju", last_name : "BuddhaRaju", car : "Maruthi-Suzuki", model : "Alto" },
    //                     { _id : 4, first_name : "Kailash", last_name : "Pasumarthy", car : "Honda", model : "CRV" },
    //                     { _id : 5, first_name : "Brian", last_name : "Carter", car : "Chevorolet", model : "Bolt" },
    //                     { _id : 6, first_name : "Theresa", last_name : "May", car : "Bentley", model : "Continental" }
    //   ];
    //   // dbo.collection("cars").drop(function(err, res) {
    //   //   if (err) throw err;
    //   //   console.log("Number of Cars documents dropped: " + res.droppedCount);
    //   // });
    //   dbo.createCollection("cars", function(err, res) {
    //     if (err) throw err;
    //     console.log("Cars Collection created" + res);
    //   });
    //   dbo.collection("cars").insertMany(myCarObj, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of car documents inserted: " + res.insertedCount);
    //     db.close();
    //   });

    // ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    // dbo.collection("customers").find({}).toArray(function(errDbo, result) {
    //   if (errDbo) throw errDbo;
    //   if (dispLog === true) 
    //   {
    //     console.log(result);
    //     console.log('\n');
    //     //db.close();   //KP : Don't close the connection as of yet
    //   }
    // });

    // ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    // dbo.collection("cars").find({}).toArray(function(errDbo, result) {
    //   if (errDbo) throw errDbo;
    //   if (dispLog === true) 
    //   {        
    //     console.log(result);
    //     console.log('\n');
    //     //db.close();   //KP : Don't close the connection as of yet
    //   }
    // });

    // ////KP : CRUD : Query a Customer into MongoDB - Commeted Out to prevent Duplicates
    // var myQuery =  {first_name:"Chi-Chen"};  //{ first_name:"Kailash" };
    // dbo.collection("customers").find(myQuery).toArray(function(errDbo, result){
    //   if (errDbo) throw errDbo;
    //   if (dispLog === !true) 
    //   {
    //     console.log(result);
    //     console.log('\n');
    //   }
    // });

    // ////KP : CRUD : Sort a Customer from MongoDB - Some are NOT Sorted in same age Order - String & Numeric  
    var mySort = { age: 1 };
    dbo.collection("customers").find().sort(mySort).toArray(function(errDbo, result){
      if (errDbo) throw errDbo;
      if (dispLog === true) 
      {
        console.log(result);
        console.log('\n');
      }
    });
    
    // ////KP : limit() : Function limits the number of Mongo records to be retrieved
    // ///      limit() in 'MongoDB' 'NoSQL' is similar to 'Top10()' in 'MSSQLServer'
    var myLimit = 3;
    dbo.collection("customers").find().limit(myLimit).toArray(function(errDbo, result){
        if (errDbo) throw errDbo;
        if (dispLog === !true) 
        {
          console.log(result);
          console.log('\n');
        }
    });

    // // ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    // dbo.collection("customers").find({}).toArray(function(errDbo, result) {
    //   if (errDbo) throw errDbo;
    //   console.log(result);
    //   //db.close();   //KP : Don't close the connection as of yet
    // });
    // ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    
    // // ////KP : Joins : SQL Server : NOT WORKING - For Now!!
    // //var myLimit = 3;
    // dbo.collection("cars").aggregate([
    //   {
    //       from: 'customers',
    //       localField: '_id',
    //       foreignField: '_id',
    //       as: 'VehicleDetails'
    //   }
    // ]).toArray(function(errDbo, result){

    //   if (errDbo) throw errDbo;
    //   if (dispLog === !true) 
    //   {
    //     console.log(result);
    //     console.log('\n');
    //   }
    // });

    //KP : Close MongoDB Connection
    db.close();
    console.log("KP: Mongodb.Connection Closed!");
    //KP : Close MongoDB Connection

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


//KP : 'module.exports = app' - Command exports the app as ng-App
module.exports = app;
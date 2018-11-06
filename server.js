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
    var dispLog = true;

    //KP : Access DB Connection Object
    var dbo = db.db("KPMongoDB");

    ////KP : isMongoDB Connection Object Check - Successfull
    var isMongodbConn = db.isConnected();
    console.log("KP: Mongodb Connection Check : isMongodbConn !" + isMongodbConn);

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
    //                         { _id:1, first_name:"Kailash", last_name:"Pasumarthy", gender:"male", 
    //                                 address:{ street:"45 Riverbend Pkwy, #Plaza 7", city:"Princeton", state:"NJ", zipcode:"08850", country:"USA" },
    //                                 age : 42, balance:2736.45
    //                         },
    //                         { 
    //                           _id:2, first_name:"Brian", last_name:"Carter",  gender:"male",
    //                                 address: { street: "321 W Main St.", city:"Louisville", state: "KY", zipcode : "40202", country : "USA" },
    //                                 age : 48, balance : 9689.15 
    //                         },
    //                         { 
    //                           _id:3, first_name:"Chi-Chen", last_name:"Huang",  gender:"male",
    //                                 address: { street:"7901 Stoneridge Drive, #Suite 500", city : "Pleasanton", state: "CA", zipcode : "94588", country : "USA" }, 
    //                                 age : 56, balance : 123456.78 
    //                         },
    //                         {  
    //                           _id:4, first_name:"Theresa",  last_name:"May",  gender:"female",
    //                               address: { street:"10 Downing St.", city : "London", state: "LN", zipcode : "AB1CD2", country : "UK" }, 
    //                               age : 65,  balance : 1003088.45
    //                         },
    //                         { 
    //                         _id:5, first_name:"Hillary", last_name:"Clendon", gender:"female",
    //                               address: { street:"1 White House", city : "Washington", state: "DC", zipcode : "01234", country : "USA" }, 
    //                               age : 70,  balance : 31208898.45
    //                         },
    //                         { 
    //                         _id:6, first_name:"BalaRaju", last_name:"BuddhaRaju", gender:"male",
    //                             address: { street:"321 Jala-Vayu-Vihar, Kukatpally", city : "Hyderabad", state: "TS", zipcode : "521325", country : "IND"  }, 
    //                             age : 72, balance : 2798.45
    //                         }
    //   ];
    //   dbo.collection("customers").insertMany(myCustomersObj, function(err, res) {
    //     if (err) throw err;
    //     console.log("Number of customers documents inserted: " + res.insertedCount);
    //     //db.close();
    //   });
  
    // //////KP : isMongoDB Create Car Collection Object Check - Successfull
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

    ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    dbo.collection("customers").find({}).toArray(function(errDbo, result) {
      if (errDbo) throw errDbo;
      if (dispLog === true) 
      {
        console.log(result);
        console.log('\n');
        //db.close();   //KP : Don't close the connection as of yet
      }
    });

    ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    dbo.collection("cars").find({}).toArray(function(errDbo, result) {
      if (errDbo) throw errDbo;
      if (dispLog === true) 
      {        
        console.log(result);
        console.log('\n');
        //db.close();   //KP : Don't close the connection as of yet
      }
    });

    ////KP : CRUD : Query a Customer into MongoDB - Commeted Out to prevent Duplicates
    var myQuery =  {first_name:"Chi-Chen"};  //{ first_name:"Kailash" };
    dbo.collection("customers").find(myQuery).toArray(function(errDbo, result){
      if (errDbo) throw errDbo;
      if (dispLog === !true) 
      {
        console.log(result);
        console.log('\n');
      }
    });

    ////KP : CRUD : Sort a Customer from MongoDB - Some are NOT Sorted in same age Order - String & Numeric  
    var mySort = { age: 1 };
    dbo.collection("customers").find().sort(mySort).toArray(function(errDbo, result){
      if (errDbo) throw errDbo;
      if (dispLog === true) 
      {
        console.log(result);
        console.log('\n');
      }
    });
    
    ////KP : limit() : Function limits the number of Mongo records to be retrieved
    ///      limit() in 'MongoDB' 'NoSQL' is similar to 'Top10()' in 'MSSQLServer'
    var myLimit = 3;
    dbo.collection("customers").find().limit(myLimit).toArray(function(errDbo, result){
        if (errDbo) throw errDbo;
        if (dispLog === !true) 
        {
          console.log(result);
          console.log('\n');
        }
    });

    // ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    dbo.collection("customers").find({}).toArray(function(errDbo, result) {
      if (errDbo) throw errDbo;
      console.log(result);
      //db.close();   //KP : Don't close the connection as of yet
    });
    ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
    
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



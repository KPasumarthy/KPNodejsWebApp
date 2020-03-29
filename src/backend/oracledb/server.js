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

//KP : Create https Server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`KP : NodeJS Express App running on https://${hostname}:${port}/!`);
});

/*********************************************************************************************************************/
//KP : Node App Service APIs 
/*KP : http get kpMongoDBUri api endpoint */
app.get("/idols", (req, res, next) => {
  //res.setHeader('Content-Type','application/json');
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.json(["Siva", "Narayana", "Rama", "Krishna", "Prakash"]);
});

//KP : Node App Service APIs 
/*********************************************************************************************************************/



// // /******************************************************************************************************************/
// // /*** KP : OracleDB Connection  ***/
// //KP : Trial 3

var oracledb = require('oracledb');
//var dbConfig = require('./dbconfig.js');
oracledb.autoCommit = true;

oracledb.getConnection(
  {
    user      : "SYS as SYSDBA",
    password  : "NodeJSORAPassword2020",
    privilege : oracledb.SYSDBA,
    connectionString: `(DESCRIPTION=
                          (ADDRESS=
                              (PROTOCOL=TCP)
                              (HOST=localhost)
                              (PORT=1521)
                            )
                            (CONNECT_DATA=
                              (SERVICE_NAME=orcl)
                              (SERVER=DEDICATED)
                            )
                          )`  
    },
  function (err, connection) {
    if (err) {
      console.error("KP : " + err.message );
      return;
    }
    console.log('KP : Oracle & NodeJS Connection  was Successful!');
    connection.close(
      function (err) {
        if (err) {
          console.error(err.message);
          return;
        }
      });
  });
// /*** KP : OracleDB Connection  ***/
// /******************************************************************************************************************/




// // /******************************************************************************************************************/
// // /*** KP : OracleDB Connection  ***/
// //KP : Trial 2
// var oracledb = require('oracledb');
// oracledb.getConnection({

//   //user          : "SYS as SYSDBA",
//   //user          : "sqlplus / as SYSDBA",
//   user: "SYS as SYSDBA",
//   password: "Sita2020",
//   connectString: `(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
//                            (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = orcl) ) )`
// })
//   .then(function (conn) {
//     return conn.execute("Select name, open_mode, cdb from v$database")
//       .then(function (result) {
//         console.log(result.rows);
//         return conn.close();
//       })
//       .catch(function (err) { console.error(err); return conn.close(); });
//   })
//   .catch(function (err) { console.error(err); });
// // /******************************************************************************************************************/ //



// /******************************************************************************************************************/
// /*** KP : OracleDB Connection  ***/

//KP : Trial 1
// // This example uses Node 8's async/await syntax.
// const oracledb = require('oracledb');
// oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
// const mypw = "NodeJSORAPassword2020"  // set mypw to the hr schema password
// async function run() {

//   let connection;

//   try {
//       connection = await oracledb.getConnection(  {
//       //user          : "SYS as SYSDBA",
//       //user          : "sqlplus / as SYSDBA",
//       user          : "SYS as SYSDBA",
//       password      : mypw,
//       //connectString : "localhost/XEPDB1"
//       //connectString : `(DESCRIPTION = (ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.1.223)(PORT = 1521)) )`
//       //connectString : `(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521)) (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = orcl) ) )`
//       connectionString : `(DESCRIPTION =   (ADDRESS = (PROTOCOL = TCP)(HOST = localhost)(PORT = 1521))
//                            (CONNECT_DATA = (SERVER = DEDICATED) (SERVICE_NAME = orcl) ) )`
//     });

//     // const result = await connection.execute(
//     //   "Select name, open_mode, cdb from v$database"
//     //   // `SELECT manager_id, department_id, department_name
//     //   //  FROM departments
//     //   //  WHERE manager_id = :id`,
//     //   // [103],  // bind value for :id
//     // );
//     // console.log(result.rows);

//     const result = await connection.getConnection();
//     console.log(result.rows);

//   } catch (err) {
//     console.error(err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// }
// run();

// /*** KP : OracleDB Connection  ***/
// /******************************************************************************************************************/



// // /******************************************************************************************************************/
// // /*** KP : MongoDB Connection  ***/
// // // /*KP : MongoDB Connection*/
// var MongoClient = require('mongodb').MongoClient;

// ////Varibales to store MongoDB Documents
// var customersAgeSorted = "";
// var customers3Limit = "";

// /// Connect to the db
// //MongoClient.connect("mongodb://localhost:27017/KPMongoDB", { useNewUrlParser: true}, function(err, db) {
// MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true}, function(err, db) {

// //KP : Error-Check to establish if MongoDB Connection is established!
//   if(!err) {
//     //KP : Console Log
//     console.log("KP : Connected to the MongoDB...");
//     console.log("KP : Ready to retrieve MongoDB collection ...");
//     var dispLog = true;

//     //KP : Access DB Connection Object
//     var dbo = db.db("KPMongoDB");

//     ////KP : isMongoDB Connection Object Check - Successfull
//     var isMongodbConn = db.isConnected();
//     console.log("KP : MongoDB Connection Check : isMongodbConn !" + isMongodbConn);


//     // ////KP : CRUD : Retrieve Access MongoDB Connection Object 'db' Properties & Parameters.
//     dbo.collection("customers").find({}).toArray(function(errDbo, result) {
//       if (errDbo) throw errDbo;
//       if (dispLog === true) 
//       {
//         console.log(result);
//         console.log('\n');
//         //db.close();   //KP : Don't close the connection as of yet
//       }
//     });
//   }
// })
// // /******************************************************************************************************************/

//KP : 'module.exports = app' - Command exports the app as ng-App
module.exports = app;
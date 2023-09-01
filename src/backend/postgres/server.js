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
const port = process.env.PORT || '2345';
app.set('port', port);


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

// /******************************************************************************************************************/
// /*** KP : PostgreSQL DB Connection  ***/

//KP : Trial 1
// // This example uses Node 8's async/await syntax.
const { Client } = require('pg');
const mypw = "NodeJSPostgresPassword";  // set mypw to the hr schema password
var pgExeResult = "";
var pgdvdAllActorsResult = "";

async function run() {

  let connection;

  try {

    const pgClient = new Client({
      user: 'postgres',
      host: 'localhost',
      database: 'dvdrental',
      password: mypw,
      port: 5432
    })

    connection = await pgClient.connect();

    console.log('KP : PostgreSQL & NodeJS Connection  was Successful!');

     //KP: Execute Queries on postgres DB
     var result = await pgClient.query(
      "SELECT actor_id, first_name, last_name, last_update FROM public.actor where actor_id <= 10"
      //"SELECT actor_id, first_name, last_name, last_update FROM public.actor where actor_id = 10"
    );
    //console.log(result.rows);
    pgdvdAllActorsResult = result.rows;
    //pgdvdAllActorsResult = result.rows[0];
    console.log(pgdvdAllActorsResult);


  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
run();

// /*** KP : PostgreSQL Connection  ***/
// /******************************************************************************************************************/

/******************************************************************************************************************** */
/*** KP : PostgreSQL Documents served on Node APIs ***/
////KP : http get v$ api endpoint
////CRUD : Retrieve Operation : $http.get()
app.get('/postgres/api/dvdrental/getFirst10Actors', function (req, res) {
  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/getFirst10Actors : " + JSON.stringify(pgdvdAllActorsResult));
  res.send(pgdvdAllActorsResult);
});
/******************************************************************************************************************** */


//KP : 'module.exports = app' - Command exports the app as ng-App
module.exports = app;
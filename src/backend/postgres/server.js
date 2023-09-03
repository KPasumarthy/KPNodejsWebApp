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

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
  extended: true
}));

/**bodyParser.json(options)
* Parses the text as JSON and exposes the resulting object on req.body.
*/
app.use(bodyParser.json());


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


async function getActor(id) {

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
    var selectCmd = "SELECT actor_id, first_name, last_name, last_update FROM public.actor where actor_id=" + id + ";";
    console.log('KP : PostgreSQL & NodeJS : SQL Command : ' + selectCmd);

    //KP: Execute Queries on postgres DB
    var result = await pgClient.query(selectCmd);
    //console.log(result.rows);
    pgdvdAllActorsResult = result.rows[0];
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

async function saveActor(actor) {

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
    var insertCmd = "Insert Into public.actor Values (" + actor.actor_id + ",'" + actor.first_name + "','" + actor.last_name + "', Now() );"
    console.log('KP : PostgreSQL & NodeJS : SQL Command : ' + insertCmd);

    //  //KP: Execute Queries on postgres DB
    var result = await pgClient.query(insertCmd);
    console.log(result.rows);
    pgdvdAllActorsResult = insertCmd;
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

async function updateActor(actor) {

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
    var updateCmd = "Update public.actor Set " + "first_name='" + actor.first_name + "',last_name='" + actor.last_name + "',last_update = Now() Where actor_id = " + actor.actor_id + ";";
    console.log('KP : PostgreSQL & NodeJS : SQL Command : ' + updateCmd);


    //  //KP: Execute Queries on postgres DB
    var result = await pgClient.query(updateCmd);
    console.log(result.rows);
    pgdvdAllActorsResult = updateCmd;
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

async function deleteActor(actor) {

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
    var deleteCmd = "Delete from public.actor Where actor_id = " + actor.actor_id;
    console.log('KP : PostgreSQL & NodeJS : SQL Command : ' + deleteCmd);


    //  //KP: Execute Queries on postgres DB
    var result = await pgClient.query(deleteCmd);
    console.log(result.rows);
    pgdvdAllActorsResult = deleteCmd;


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

////KP : http get v$ api endpoint
////CRUD : Retrieve Operation : $http.get() Actor
app.get('/postgres/api/dvdrental/getActor/:id', function (req, res) {
  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  var id = req.params.id;

  console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/getActor : " + id);

  getActor(id).then(() => {
    console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/getActor : " + id);
    res.status(200).send(pgdvdAllActorsResult);
  })
    .catch((e) => {
      res.send(400).send(e);
    });

});


////KP : http post v$ api endpoint
////CRUD : Retrieve Operation : $http.post()
app.post('/postgres/api/dvdrental/createActor', function (req, res) {

  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  var actor = req.body;

  console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/createActor : app.post(createActor) : "
    + JSON.stringify(actor) + " " + req.body.actor_id + " " + req.body.first_name + " " + req.body.last_name);


  saveActor(actor).then(() => {
    console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/createActor : app.post(createActor) : " + pgdvdAllActorsResult);
    res.status(200).send(pgdvdAllActorsResult);
  })
    .catch((e) => {
      res.send(400).send(e);
    });
});

////KP : http put v$ api endpoint
////CRUD : Retrieve Operation : $http.post()
app.put('/postgres/api/dvdrental/updateActor', function (req, res) {

  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  var actor = req.body;

  console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/updateActor : app.put(updateActor) : "
    + JSON.stringify(actor) + " " + req.body.actor_id + " " + req.body.first_name + " " + req.body.last_name);


  updateActor(actor).then(() => {
    console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/updateActor : app.put(updateActor) : " + pgdvdAllActorsResult);
    res.status(200).send(pgdvdAllActorsResult);
  })
    .catch((e) => {
      res.send(400).send(e);
    });
});


////KP : http post v$ api endpoint
////CRUD : Retrieve Operation : $http.delete()
app.delete('/postgres/api/dvdrental/deleteActor', function (req, res) {

  //res.setHeader('Content-Type','text/html');
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');

  var actor = req.body;

  console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/deleteActor : app.deleteActor(deleteActor) : "
    + JSON.stringify(actor) + " " + req.body.actor_id + " " + req.body.first_name + " " + req.body.last_name);


  deleteActor(actor).then(() => {
    console.log("KP : PostgreSQL Service APIs /postgres/api/dvdrental/deleteActor : app.deleteActor(deleteActor) : " + pgdvdAllActorsResult);
    res.status(200).send(pgdvdAllActorsResult);
  })
    .catch((e) => {
      res.send(400).send(e);
    });
});



/******************************************************************************************************************** */


//KP : 'module.exports = app' - Command exports the app as ng-App
module.exports = app;
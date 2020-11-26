/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*** KP : NodeJS Web Server ***/
// Get dependencies

// /******************************************************************************************************************** */
// /*** KP : MySQL Connection  ***/
// // /*KP : MySQL Connection*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'world'
});

connection.connect();
connection.query("Select * From world.country", function (err, result, fields) {
  if (err) throw err;
  console.log(result);
});


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

connection.end();
/*** KP : MySQLDB Connection  ***/
/******************************************************************************************************************** */





// // // /******************************************************************************************************************/
// // // /*** KP : OracleDB Connection  ***/
// // //KP : Trial 3

// var mysql = require('mysql');
// //var dbConfig = require('./dbconfig.js');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "svcaccount",
//   password: "(svcP@33word)",
//   database: "world"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("KP : MySQL DB Connected!");
// });


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
// const mypw = "Sita2008"  // set mypw to the hr schema password
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
//module.exports = app;
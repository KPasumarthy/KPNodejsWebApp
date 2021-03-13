/*** KP : Commented Out Lines of Code - to start http/https Server with out "npm install -g @angular/cli" Packages  ***/
/*** KP : NodeJS Web & SMTP Server ***/
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

/***** KP : NodeJS Express SMTP Server *****/
//const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

/***** KP : NodeJS Express SMTP Server *****/


/***** KP : NodeJS Express APP/API & SMTP Server *****/
/*KP : NodeJS Express App hosted on Node Server set to handle HTTPS API Service Requests */
const app = express();
const hostname = '127.0.0.1';
/*KP : Get port from environment and store in Express.*/
const port = process.env.PORT || '5000';
app.set('port', port);
app.use(cors());
app.use(express.json());
app.use("/", router);


//KP : Point static path to dist
app.use(express.static(path.join(__dirname, 'dist/KPNodeJSWebApp')));

//KP : Support 'json' encoded bodies
app.use(bodyParser.json()); // support json encoded bodies


//***********KP : Create https Mail & SMTP Server : WORKING*************//
// //KP : Create https Server - WORKING
// const server =  http.createServer(app);
// server.listen(port, () => {
//      console.log(`KP : NodeJS Express App running on https://${hostname}:${port}/!`);
// } );
//***********KP : Create https Server : WORKING*************//

//KP : Create https Server
const server = http.createServer(app);
server.listen(port, () => {
  console.log(`KP : SMTP Mail Server running on https://${hostname}:${port}/!`);
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
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.send(movies);
});

///KP : http post  api endpoint
app.post('/api/receiveInfo', function (req, res) {

  //KP : Write the Received Data from POST Request
  console.log(`KP : NodeJS Express App on https://${hostname}:${port}/api/receiveInfo'! - Data Received on POST Method : `);
  console.log(`KP : /api/receiveInfo - req.body.name : ` + req.body.name);
  console.log(`KP : /api/receiveInfo - req.body.email : ` + req.body.email);
  console.log(`KP : /api/receiveInfo - req.body.subject : ` + req.body.subject);
  console.log(`KP : /api/receiveInfo - req.body.message : ` + req.body.message);

  res.setHeader('Content-Type', 'application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.send(movies);

});

///KP : http post api endpoint Send Email
app.post('/api/sendEmail', function (req, res) {

  //KP : Write the Received Data from POST Request
  console.log(`KP : NodeJS Express App on https://${hostname}:${port}/api/sendEmail'! - Data Received on POST Method : `);
  console.log(`KP : /api/receiveInfo - req.body.name : ` + req.body.name);
  console.log(`KP : /api/receiveInfo - req.body.email : ` + req.body.email);
  console.log(`KP : /api/receiveInfo - req.body.subject : ` + req.body.subject);
  console.log(`KP : /api/receiveInfo - req.body.message : ` + req.body.message);

  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.message;
  // const name = "Kailash Pasumarthy";
  // const email = "KP123@hotmail.com";
  // const message = "Hi, This is a Test Email from AngularJS/ReactJS as Client & SMTP MailServer running on Node Server! Thanks, Kailash"; 
  const mail = {
    from: "KP123@gmail.com",
    to: email,
    subject: subject,
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    attachments: [
      {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
      },
      {   // binary buffer as an attachment
        filename: 'text2.txt',
        content: fs.createReadStream('../../../Literature/ReactJSLiterature.txt')
      },
      {   // file on disk as an attachment
        filename: 'text3.jpg',
        path: '../../../Literature/ReactJSAPICall.JPG' // stream this file
      },
    ]
  };

  console.log(`KP : SMTP Mail Server Router on https://${hostname}:${port}/api/sendEmail`);

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "failed" });
      console.log(`KP : SMTP Mail Server Sent Mail Failed!`);
    } else {
      res.json({ status: "sent" });
      console.log(`KP : SMTP Mail Server Sent Mail Successful!`);
    }
  });


  res.setHeader('Content-Type', 'application/json');
  //res.setHeader('Content-Type', 'text/html');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  //res.send(books);

});

//KP : Node App Service APIs 
/*********************************************************************************************************************/


router.get("/contact", (req, res) => {
  // const name = req.body.name;
  // const email = req.body.email;
  // const message = req.body.message; 
  const name = "Kailash Pasumarthy";
  const email = "KP123@hotmail.com";
  const message = "Hi, This is a Test Email from AngularJS/ReactJS as Client & SMTP MailServer running on Node Server! Thanks, Kailash";
  const mail = {
    from: "KP123@gmail.com",
    to: "KP123@hotmail.com",
    subject: "AngularJS/ReactJS & Node Server SMTP Message",
    html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    attachments: [
      {   // utf-8 string as an attachment
        filename: 'text1.txt',
        content: 'hello world!'
      },
      {   // binary buffer as an attachment
        filename: 'text2.txt',
        content: fs.createReadStream('../../../Literature/ReactJSLiterature.txt')
      },
      {   // file on disk as an attachment
        filename: 'text3.jpg',
        path: '../../../Literature/ReactJSAPICall.JPG' // stream this file
      },
    ]
  };

  console.log(`KP : SMTP Mail Server Router on https://${hostname}:${port}/contact`);

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "failed" });
      console.log(`KP : SMTP Mail Server Sent Mail Failed!`);
    } else {
      res.json({ status: "sent" });
      console.log(`KP : SMTP Mail Server Sent Mail Successful!`);
    }
  });
  
});


/*********************************************************************************************************************/
//KP : NodeJS Express SMTP Server 

// ////KP : Enable SMTP Settings on KPSendGmail
// //https://www.google.com/settings/security/lesssecureapps : Allow less secure apps: Enable ON
// //https://accounts.google.com/DisplayUnlockCaptcha : Continue

const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: "465",
  auth: {
    user: "KP123",
    pass: "password",
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(`KP : SMTP Mail Server - Error : ` + error);
  } else {
    console.log(`KP : SMTP Mail Server : Ready to Send!`);
  }
});


//KP : NodeJS Express SMTP Server 
/*********************************************************************************************************************/

//KP : 'module.exports = app' - Command exports the app as ng-App
module.exports = app;
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
import { Component, OnInit } from '@angular/core';
//KP : Add (or) import components from angular core
import { MongoDB } from 'mongodb';
import { Mongoose } from 'mongoose';
import { HttpClient } from '@angular/common/http';
import { Http } from  '@angular/http';
//import { request } from 'http';
// import * as path from 'path';
// import * as express from 'express';
// import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';
//import { NgHttp } from '../../../node_modules/@angular/http';
import { Router } from '@angular/router';
//import { error } from '@angular/compiler/src/util';



@Component({
  selector: 'app-mongodbnosql',
  templateUrl: './mongodbnosql.component.html',
  styleUrls: ['./mongodbnosql.component.css']
})
export class MongoDBNoSqlComponent implements OnInit {

  ////KP : Class Constructor
  //constructor() {}
  constructor(private router : Router){}

  ngOnInit() {
    this.kptest();
  }

  kptest(){

    console.log("KP : MongoDBNoSqlComponent for MongoDB Access...");

    //Router
    //var router = Router;
    this.router.navigateByUrl(`/url`).then(function mySuccess(response) {
      console.log("KP : Successfully Connected to the Node Server through Router to access MongoDB ..." + response);
      }, function myError(err) {
        console.log("KP : Error in Connecting to the Node Server through Router to access MongoDB ..." + err);
      }); 

    // ////KP : Use Angular HTTP $ libraries
    //   $http.get("http://localhost:52807/api/Persons/20778").then(function mySuccess(response) {
    //     $scope.myWelcome = response.data;
    // }, function myError(reponse) {
    //     $scope.myWelcome = response.error;
    // }); 
    // var httpClient = HttpClient;
    // var http = Http;

    // httpClient.get(`http://127.0.0.1:2727/url`, (request, response)).then(
    //   console.log( "KP : " );
    // );

    // var Db = require('mongodb').Db,
    // MongoClient = require('mongodb').MongoClient,
    // Server = require('mongodb').Server,
    // ReplSetServers = require('mongodb').ReplSetServers,
    // ObjectID = require('mongodb').ObjectID,
    // Binary = require('mongodb').Binary,
    // GridStore = require('mongodb').GridStore,
    // Grid = require('mongodb').Grid,
    // Code = require('mongodb').Code,
    // BSON = require('mongodb').pure().BSON,
    // assert = require('assert');


      ///******************************************************************************************************************** */
      // /*** KP : MongoDB Connection  ***/
      // ///*KP : MongoDB Connection*/      
      // var conString = "mongodb://localhost:27017/KPMongoDB";
      // Mongoose.connect(conString, { useMongoClient: true }, () => {
      //     console.log("KP : Connected to the MongoDB using Mongoose...");
      //     console.log("KP : Mongoose ready to retrieve MongoDB collection ...");
      // });
      //db = connect('localhost:27017/KPMongoDB'); 

      /******************************************************************************************************************** */
      /*** KP : MongoDB Connection  ***/
      ///*KP : MongoDB Connection*/
      //var MongoClient = require('mongodb').MongoClient;
      //var MongoClient = require('mongodb');

      /// Connect to the db
      //MongoClient.connect("mongodb://localhost:27017/KPMongoDB", { useNewUrlParser: true}, function(err, db) {
      //MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true}, function(err, db) {
      ////KP : Error-Check to establish if MongoDB Connection is established!
      //if(!err) {
        //KP : Console Log
        //console.log("KP : Connected to the MongoDB...");
        //console.log("KP : Ready to retrieve MongoDB collection ...");
        //var dispLog = true;
        //}
      //});
      /******************************************************************************************************************** */
  }
}


import { Component, OnInit } from '@angular/core';
//KP : Add (or) import components from angular core
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { MongoDBNoSqlService } from  './mongodbnosql.service';



@Component({
  selector: 'app-mongodbnosql',
  templateUrl: './mongodbnosql.component.html',
  styleUrls: ['./mongodbnosql.component.css']
})
export class MongoDBNoSqlComponent implements OnInit {

  ////KP : Class Constructor
  //constructor() {}
  //constructor(private router : Router){

    title = 'KPNodeJSWebApp : Angular 6 : ng-App & MongoDB';
    public foods;
    public books;
    public movies;
    public kpUri;
    public idols;
    public heroes;
    public heroesNonObs;
    public customersAgeSorted;
    public customers3Limit;
  
    //constructor(private _demoService: DemoService) {}  
    constructor(
      private _router : Router,
      private _mongoDBNoSqlService: MongoDBNoSqlService      
    ) {}  
  
    //KP : Additional ngOnInit() method add
    ngOnInit() {
      this.getIdols();
      this.getkpUri();
      this.getFoods();
      this.getBooks();
      this.getMovies();
      this.getCustomersAgeSorted();
      this.getCustomers3Limit();
      //this.kptest();  ////KP: Issues in connecting through the Router!
    }
  
  
    /***MongoDB Service : Service Methods ***/
    getIdols() {
      this._mongoDBNoSqlService.getIdols().subscribe(
        data => {this.idols = data},
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading Idols!")
      )
    }
  
    getFoods() {
      this._mongoDBNoSqlService.getFoods().subscribe(
        data => { this.foods = data },
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading foods!")
      );
    }
  
    getBooks() {
      this._mongoDBNoSqlService.getBooks().subscribe(
        data => {this.books = data},
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading books!")
      )
    }
  
    getMovies() {
      this._mongoDBNoSqlService.getMovies().subscribe(
        data => {this.movies = data},
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading movies!")
      )
    }
  
    getCustomersAgeSorted(){
      this._mongoDBNoSqlService.getCustomersAgeSorted().subscribe(
        data => {this.customersAgeSorted = data},
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading Age Sorted Customers !")
      )
    };
  
    getCustomers3Limit(){
      this._mongoDBNoSqlService.getCustomers3Limit().subscribe(
        data => {this.customers3Limit = data},
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading Customers limited to 3 !")
      )
    }

    getkpUri() {
      this._mongoDBNoSqlService.getkpUri().subscribe(
        data => {this.kpUri = data},
        err => console.error("KP : App-Component DemoService throwing errors : " + err),
        () => console.log("KP : App-Component DemoService Done loading kpUri data elements!")
      )
    }
  
    // /***MongoDB Service : Service Methods ***/
      

  kptest(){

    console.log("KP : MongoDBNoSqlComponent for MongoDB Access...");

    //Router
    //var router = Router;
    var routerUrl = 'http://localhost:2727/idols'; 
    this._router.navigateByUrl(routerUrl).then(function mySuccess(response) {
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


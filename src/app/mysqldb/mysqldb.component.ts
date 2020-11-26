import { Component, OnInit } from '@angular/core';
//KP : Add (or) import components from angular core
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { MySQLDBService } from  './mysqldb.service';

@Component({
  selector: 'app-mysqldb',
  templateUrl: './mysqldb.component.html',
  styleUrls: ['./mysqldb.component.css']
})
export class MySQLDBComponent implements OnInit {


  title = 'KPNodeJSWebApp : Angular 6 : ng-App & MySQL';
  public foods;
  public books;
  public movies;
  public kpUri;
  public idols;
  public cities;

  constructor(
    private _router : Router,
    private _mySQLDBService: MySQLDBService  
  ) {
    
   }

  ngOnInit() {
    this.getIdols();
    this.getFoods();
    this.getBooks();
    this.getMovies();
    this.getCities();
  }

  
    /***MongoDB Service : Service Methods ***/
    getIdols() {
      this._mySQLDBService.getIdols().subscribe(
        data => {this.idols = data},
        err => console.error("KP : App-Component MySQLDBService throwing errors : " + err),
        () => console.log("KP : App-Component MySQLDBService Done loading Idols!")
      )
    }
  
    getFoods() {
      this._mySQLDBService.getFoods().subscribe(
        data => { this.foods = data },
        err => console.error("KP : App-Component MySQLDBService throwing errors : " + err),
        () => console.log("KP : App-Component MySQLDBService Done loading Foods!")
      );
    }
  
    getBooks() {
      this._mySQLDBService.getBooks().subscribe(
        data => {this.books = data},
        err => console.error("KP : App-Component MySQLDBService throwing errors : " + err),
        () => console.log("KP : App-Component MySQLDBService Done loading Idols!")
      )
    }
  
    getMovies() {
      this._mySQLDBService.getMovies().subscribe(
        data => {this.movies = data},

        err => console.error("KP : App-Component MySQLDBService throwing errors : " + err),
        () => console.log("KP : App-Component MySQLDBService Done loading Idols!")
      )
    }
  
    getCities(){
      this._mySQLDBService.getCities().subscribe(
        data => {this.cities = data},
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading Age Sorted Customers !")
      )
    };
  

}

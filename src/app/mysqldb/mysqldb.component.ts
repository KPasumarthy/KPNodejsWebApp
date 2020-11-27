import { Component, OnInit } from '@angular/core';
//KP : Add (or) import components from angular core
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { MySQLDBService } from  './mysqldb.service';

//KP: Pagination Interface
interface IServerResponse {
  asyncItems: any[];
  asyncTotal: Number;
}


@Component({
  selector: 'app-mysqldb',
  templateUrl: './mysqldb.component.html',
  styleUrls: ['./mysqldb.component.css']
})
export class MySQLDBComponent implements OnInit {

  constructor(
    private _router : Router,
    private _mySQLDBService: MySQLDBService  
  ) { }

  title = 'KPNodeJSWebApp : Angular 6 : ng-App & MySQL';
  public foods;
  public books;
  public movies;
  public kpUri;
  public idols;
  public cities;
  public citiesObs;


    //KP : Angular 6 Ngx-PaginationComponent
    public data: Array<any>;
    public totalRecords: String;
    public page: Number = 1;
  



  ngOnInit() {
    this.getIdols();
    this.getFoods();
    this.getBooks();
    this.getMovies();
    this.getCities();
    this.getCitiesObs();
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
      this._mySQLDBService.getCities().subscribe((data) => {
          console.log("KP : MySQLDB : " + data);
          this.cities = data;
        },
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading Age Sorted Customers !")
      )
    };
  

    getCitiesObs(){
      this._mySQLDBService.getCitiesObservable().subscribe((data) => {
      
          console.log("KP : MySQLDB : " + data.results);
          console.log("KP : MySQLDB Pagination : " + data.length  );
          this.citiesObs = data;
          this.totalRecords = data.length;
          console.log("KP : MySQLDB Pagination : " + this.totalRecords );
        },
        err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
        () => console.log("KP : App-Component MongoDBService Done loading Age Sorted Customers !")
      )
    };
  
    public items = [];
    public pageOfItems: Array<any>;
  
    onChangePage(pageOfItems: Array<any>) {
      // update current page of items
      this.pageOfItems = pageOfItems;
    }



}

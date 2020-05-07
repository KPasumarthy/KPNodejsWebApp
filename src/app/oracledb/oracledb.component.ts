import { Component, OnInit } from '@angular/core';
//KP : Add (or) import components from angular core
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { OracleDBService } from  './oracledb.service';


@Component({
  selector: 'app-oracledb',
  templateUrl: './oracledb.component.html',
  styleUrls: ['./oracledb.component.css']
})
export class OracledbComponent implements OnInit {

  public idols;
  public oraV3dbRes;
  public oraAllUsers;

  constructor(
    private _router : Router,
    private _oracleDBService: OracleDBService      
  ) { }

  ngOnInit() {
    this.getIdols();  
    this.getORA19cVData();
    this.getORAAllUsers();
  }

  /***OracleDB Service : Service Methods ***/
  getIdols() {
    this._oracleDBService.getIdols().subscribe(
      data => {this.idols = data},
      err => console.error("KP : App-Component OracleDBService 'getIdols()' throwing errors : " + err),
      () => console.log("KP : App-Component OracleDBService 'getIdols()' Done loading Idols!")
    )
  }

  ////KP : Uses http.get() to load oracle data from 'v$database' a single API endpoint
  getORA19cVData() {
    this._oracleDBService.getORA19cVData().subscribe(
      data => {this.oraV3dbRes = data},
      err => console.error("KP : App-Component OracleDBService 'getORA19cVData()' throwing errors : " + err),
      () => console.log("KP : App-Component OracleDBService 'getORA19cVData()' Done loading ORA19cVData!")
    )
 }

  ////KP : Uses http.get() to load oracle data from 'All_Users' a single API endpoint
  getORAAllUsers() {
    this._oracleDBService.getORAAllUsers().subscribe(
      data => {this.oraAllUsers = data},
      err => console.error("KP : App-Component OracleDBService 'getORAAllUsers()' throwing errors : " + err),
      () => console.log("KP : App-Component OracleDBService 'getORAAllUsers()' Done Loading Oracle All Users!")
    )
 }
 

}

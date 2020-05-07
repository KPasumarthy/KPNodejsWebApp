import { Injectable } from '@angular/core';
//KP : Add (or) Import components from angular core
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OracleDBService {

  constructor(private http: HttpClient) { 
    console.log("KP : OracledbService for OracleDB 'Oracle19c Access...");
  }

  
  ////KP : Uses http.get() to load oracle data from 'v$database' a single API endpoint
  getIdols() {
    return this.http.get('http://localhost:1919/idols');
  }

  ////KP : Uses http.get() to load oracle data from 'v$database' a single API endpoint
  getORA19cVData() {
    return this.http.get('http://localhost:1919/oracledbapi/ORAv3database');
  }

    ////KP : Uses http.get() to load oracle data from 'All_users' a single API endpoint
    getORAAllUsers() {
      return this.http.get('http://localhost:1919/oracledbapi/ORAAllUsers');
    }


}

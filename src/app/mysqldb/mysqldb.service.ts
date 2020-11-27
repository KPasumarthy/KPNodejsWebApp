import { Injectable } from '@angular/core';
//KP : Add (or) import components from angular core
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//@Injectable()
export class MySQLDBService {

  constructor(private http: HttpClient) {
      console.log("KP : MySQLDBService for MySQL Access...");
      //this.kptest();
   }

  ////KP : Uses http.get() to load food data from a single API endpoint
  getFoods() {
      return this.http.get('http://localhost:3366/api/foods');
  }

  ////KP : Uses http.get() to load books data from a single API endpoint
  getBooks() {
      return this.http.get('http://localhost:3366/api/books');
  }

  ////KP : Uses http.get() to load movies data from a single API endpoint
  getMovies() {
      return this.http.get('http://localhost:3366/api/movies');
  }

  ////KP : Uses http.get() to get some kpMongoDBUri data from a single API endpoint
  getkpUri() {
      return this.http.get('http://localhost:3366/kpUri');
  }

  ////KP : Uses http.get() to get some url data from a single API endpoint
  getIdols() {
      //return this.http.get('http://localhost:2727/idols');
    return this.http.get('http://localhost:3366/oracledbapi/ORAv3database');

  }

  async getCitiesAsync(){
    return await this.http.get('http://localhost:3366/mysqlapi/cities');
  };

  getCitiesObservable() : Observable<any> {
    return this.http.get('http://localhost:3366/mysqlapi/cities');
  };

  getCities() {
    return this.http.get('http://localhost:3366/mysqlapi/cities');
  };

}
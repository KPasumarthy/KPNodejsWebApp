import { Injectable } from '@angular/core';
//KP : Add (or) import components from angular core
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Hero } from '../modules/hero';

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
    //return this.http.get('http://localhost:3366/kpUri');
    return ('http://localhost/KPMVCWebAPIs/api/Person/27');
  }

  getkpUriObs(): Observable<any> {
    //return this.http.get('http://localhost:3366/kpUri');
    return this.http.get('http://localhost/KPMVCWebAPIs/api/Persons/27').pipe(
      tap(person =>
        console.log("KP : getkpUriObs() : " + person)));
  }


  async getkpUriAsync() {
    //return this.http.get('http://localhost:3366/kpUri');
    return await ('http://localhost/KPMVCWebAPIs/api/Person/27');
  }

  ////KP : Uses http.get() to obtain persons data hosted on localhost API endpoint
  getPersons(): Observable<any> {
    return this.http.get('http://kpmvcwebapis.com/api/Persons/');
  }

  ////KP : Uses http.get() to obtain a person data hosted on localhost API endpoint
  getPerson(id: number): Observable<any> {
    var uri = 'http://kpmvcwebapis.com/api/Persons/' + id.toString()
    return this.http.get(uri);
  }


  ////KP : Uses http.get() to get some url data from a single API endpoint
  getIdols() {
    //return this.http.get('http://localhost:2727/idols');
    return this.http.get('http://localhost:3366/oracledbapi/ORAv3database');

  }

  async getCitiesAsync() {
    return await this.http.get('http://localhost:3366/mysqlapi/cities');
  };

  getCitiesObservable(): Observable<any> {
    return this.http.get('http://localhost:3366/mysqlapi/cities');
  };

  getCities() {
    return this.http.get('http://localhost:3366/mysqlapi/cities');
  };

}
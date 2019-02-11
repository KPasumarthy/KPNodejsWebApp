import { Injectable } from '@angular/core';
//KP : Add (or) import components from angular core
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class MongoDBNoSqlService {

  constructor(private http: HttpClient) {
      console.log("KP : MongoDBNoSqlService for MongoDB Access...");
      //this.kptest();
   }

  ////KP : Uses http.get() to load food data from a single API endpoint
  getFoods() {
      return this.http.get('http://localhost:2727/api/foods');
  }

  ////KP : Uses http.get() to load books data from a single API endpoint
  getBooks() {
      return this.http.get('http://localhost:2727/api/books');
  }

  ////KP : Uses http.get() to load movies data from a single API endpoint
  getMovies() {
      return this.http.get('http://localhost:2727/api/movies');
  }

  ////KP : Uses http.get() to get some kpMongoDBUri data from a single API endpoint
  getkpUri() {
      return this.http.get('http://localhost:2727/kpUri');
  }

  ////KP : Uses http.get() to get some url data from a single API endpoint
  getIdols() {
      return this.http.get('http://localhost:2727/idols');
  }

  getCustomersAgeSorted(){
    return this.http.get('http://localhost:2727/mongodbnosqlapi/customersAgeSorted');
  };

  getCustomers3Limit(){
    return this.http.get('http://localhost:2727/mongodbnosqlapi/customers3Limit');
  };

  getWakefernStairCase(){
    return this.http.get('http://localhost:2727/api/wakefernStairCase');
  };

}
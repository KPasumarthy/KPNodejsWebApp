import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';

const httpOptions = {
    //headers: new HttpHeaders({'Content-Type':'application/json'})
    //headers: new HttpHeaders({'Access-Control-Allow-Origin': '*'})
    headers: new HttpHeaders( {'Content-Type':'application/json',
                                    'Access-Control-Allow-Origin': '*',
                                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'}
    )};

@Injectable()
export class DemoService {
    ////constructor(private http:HttpClient) {}
    constructor(private http : HttpClient) {}

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

}

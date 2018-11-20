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
    //constructor(private http:HttpClient) {}
    constructor(private http : HttpClient) {}

    //KP : Uses http.get() to load data from a single API endpont
    getFoods() {
        //return this.http.get('api/foods');
        //return this.http.get('http://localhost:2727/api');
        return this.http.get('http://localhost:2727/api/foods');
    }
}

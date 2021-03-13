import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KPWebApisService {

  constructor(private http: HttpClient) {
    console.log("KP : KPWebApisService for accessing 'KPWebAPIs' hosted-on localhost...");
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

  ////KP : Uses http.get() to obtain persons data hosted on localhost API endpoint
  getRandomUsers(): Observable<any> {
    return this.http.get('https://randomuser.me/api/?results=100');
  }
  ////KP : Uses http.get() to obtain persons data hosted on localhost API endpoint
  async getPersonsAsync() {
    return await this.http.get('http://kpmvcwebapis.com/api/Persons/');
  }

  ////KP : Uses http.get() to obtain persons data hosted on localhost API endpoint
  async getRandomUsersAsync() {
    return await this.http.get('https://randomuser.me/api/?results=100');
  }


}

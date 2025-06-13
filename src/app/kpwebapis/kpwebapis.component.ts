import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { KPWebApisService } from  './kpwebapis.service';



@Component({
  selector: 'app-kpwebapis',
  templateUrl: './kpwebapis.component.html',
  styleUrls: ['./kpwebapis.component.css']
})
export class KpwebapisComponent implements OnInit {

  title = 'KPNodeJSWebApp : Angular 6 : ng-App & KPWebAPIs';

  public books;


  constructor(
          private _router : Router,
          private _kpWebApisService: KPWebApisService 
  ) { }

  ngOnInit() {
    let  colName = "isbn";
    this.getBooks();
    this.sort(colName);
  }

  getBooks() {
    this._kpWebApisService.getBooks().subscribe(
      //data => {this.books = data},
      data => {
        this.books = data["message"] ["books"],
        console.log("KP : App-Component KPWebApisService data  " + data ),
        console.log("KP : App-Component KPWebApisService data['message'] " + JSON.stringify(data["message"] )),
        console.log("KP : App-Component KPWebApisService data['message'][books]  " + JSON.stringify(data["message"] ["books"]) )
      },
      err => console.error("KP : App-Component KPWebApisService throwing errors : " + err),
      () => console.log("KP : App-Component KPWebApisService Done loading books!")
    )
  }

  sort(colName) {
    console.log("KP : App-Component KPWebApisService sort(colName) : " + colName)

    this.books.sort((a, b) => a[colName] > b[colName] ? 1 : a[colName] < b[colName] ? -1 : 0)
}

}

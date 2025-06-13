import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DemoService } from '../services/demo.service';
import { KPWebApisService } from  './kpwebapis.service';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';





@Component({
  selector: 'app-kpwebapis',
  templateUrl: './kpwebapis.component.html',
  styleUrls: ['./kpwebapis.component.css'],
  
  
})
export class KpwebapisComponent implements OnInit {

  title = 'KPNodeJSWebApp : Angular 6 : ng-App & KPWebAPIs';

  public books;
  public name = new FormControl('');
  public formControl = new FormControl('');
  public profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    isbn : new FormControl(''),
    title : new FormControl('')
  });
  public inputISBNValue: string = ''; // Property to hold the ISBN input value
  public bookSearched: string = ''; 
  public isVisibleBookSeearched: boolean = false;
  public span = document.createElement("span");

  constructor(
          private _router : Router,
          private _kpWebApisService: KPWebApisService 
  ) { }

  ngOnInit() {
    let  colName = "isbn";
    this.getBooks();
    this.sort(colName);

  }


  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.inputISBNValue = target.value; // Update the property with the input value
    this.isVisibleBookSeearched = true;
    console.log("KP : App-Component KPWebApisService onInputChange(event) : " + 
      " this.inputISBNValue : " +  this.inputISBNValue +
      " this.isVisibleBookSeearched : " +  this.isVisibleBookSeearched
    )

    this._kpWebApisService.getBook(this.inputISBNValue).subscribe(
      data => {
        this.bookSearched = data["message"],
        console.log("KP : App-Component KPWebApisService data  " + data ),
        console.log("KP : App-Component KPWebApisService data['message'] " + JSON.stringify(data["message"] )),
        console.log("KP : App-Component KPWebApisService this.bookSearched " + JSON.stringify( this.bookSearched) )
      },
      err => console.error("KP : App-Component KPWebApisService throwing errors : " + err),
      () => console.log("KP : App-Component KPWebApisService Done loading book with ISBN : " + JSON.stringify( this.bookSearched) )
    )


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

   onSubmit(bookISBN){
    console.log("KP : App-Component KPWebApisService Book ISBN : " + bookISBN)
   }





}

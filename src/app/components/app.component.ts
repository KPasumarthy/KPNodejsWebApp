import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';
//import { Observable } from 'rxjs/Observable';


@Component({
  //KP : selector: 'app-root',
  selector: 'demo-app',
  template: `
    <h1>Angular 5 HttpClient Demo App</h1>

    <h3>Idols</h3>
    <ul>
      <li *ngFor="let idol of idols">{{idol}}</li>
    </ul>

    <h3>URIs</h3>
    <ul>
      <li *ngFor="let uri of kpUri">{{uri}}</li>
    </ul>

    <h3>Books</h3>
    <ul>
      <li *ngFor="let book of books">{{book.title}} : {{book.author}}</li>
    </ul>

    <h3>Foods</h3>
    <ul>
      <li *ngFor="let food of foods">{{food.id}} : {{food.name}}</li>
    </ul>

    <h3>Movies</h3>
    <ul>
      <li *ngFor="let movie of movies">{{movie.title}}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KPNodeJSWebApp : ng-App & MongoDB';
  public foods;
  public books;
  public movies;
  public kpUri;
  public idols;

  constructor(private _demoService: DemoService) {}  

  //KP : Additional ngOnInit() method add
  ngOnInit() {
    this.getIdols();
    this.getkpUri();
    this.getFoods();
    this.getBooks();
    this.getMovies();
  }

  getFoods() {
      this._demoService.getFoods().subscribe(
        data => { this.foods = data },
        err => console.error("KP : App-Component DemoService throwing errors : " + err),
        () => console.log("KP : App-Component DemoService Done loading foods!")
      );
  }

  getBooks() {
    this._demoService.getBooks().subscribe(
      data => {this.books = data},
      err => console.error("KP : App-Component DemoService throwing errors : " + err),
      () => console.log("KP : App-Component DemoService Done loading books!")
    )
  }

  getMovies() {
    this._demoService.getMovies().subscribe(
      data => {this.movies = data},
      err => console.error("KP : App-Component DemoService throwing errors : " + err),
      () => console.log("KP : App-Component DemoService Done loading movies!")
    )
  }

  getkpUri() {
    this._demoService.getkpUri().subscribe(
      data => {this.kpUri = data},
      err => console.error("KP : App-Component DemoService throwing errors : " + err),
      () => console.log("KP : App-Component DemoService Done loading kpUri data elements!")
    )
  }

  getIdols() {
    this._demoService.getIdols().subscribe(
      data => {this.idols = data},
      err => console.error("KP : App-Component DemoService throwing errors : " + err),
      () => console.log("KP : App-Component DemoService Done loading Idols!")
    )
  }
}

// // KP : Original App-Component - Hero Service
// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {
// //   title = 'KPNodeJSWebApp : Tour of Heros';
// // }

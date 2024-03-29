import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';
//KP : Additional Hero Service Added!
import { HeroService } from '../services/hero.service';
//import { Hero } from '../modules/hero';
//import { HEROS } from '../modules/mock-heros';
//import { Observable, of } from 'rxjs';
//import { MessageService } from '../messages/message.service';
import { MongoDBNoSqlService } from '../mongodbnosql/mongodbnosql.service';

//Boot Strap Modal Service 
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModalComponent } from '../bootstrap/modal/modal.component';

//KP : Simple Modal Component
import { SimpleModComponent } from '../simplemod/simplemod.component';
import { SimpleModalService } from "ngx-simple-modal";

@Component({
  selector: 'app-root',
  // template: `
  //     <div class="modal-content">
  //       <div class="modal-header">
  //         <h4>Confirm</h4>
  //       </div>
  //       <div class="modal-body">
  //         <p>Are you sure?</p>
  //       </div>
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-primary" (click)="showConfirm()">Show confirm</button>
  //       </div>
  //     </div>
  //     `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `KPNodeJSWebApp : 
  Angular Application`;    ///// KP : Angular 6 - Backticks
  modalRef: BsModalRef;

  //constructor(private _demoService: DemoService) {}  
  // constructor(
  //   private modalService: BsModalService
  // ) {}  

  constructor(
    private modalService: BsModalService,
    private simpleModalService: SimpleModalService,
  ) { }
  showConfirm() {
    let disposable = this.simpleModalService.addModal(SimpleModComponent, {
      title: 'Confirm title',
      message: 'Confirm message'
    })
      .subscribe((isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          alert('accepted');
        }
        else {
          alert('declined');
        }
      });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

  //KP : Additional ngOnInit() method add
  ngOnInit() {
  }

  // // //Open NGX Modal
  openNGXModal(){
    this.modalRef = this.modalService.show(ModalComponent, {
      initialState:{
        modaltitle : "NGX Modal",
        modaldata:  "KP : This is the implementation of NGX Modal"
      }
    })
  };


}





// import { Component } from '@angular/core';
// import { ConfirmComponent } from './confirm.component';
// import { SimpleModalService } from "ngx-simple-modal";

// @Component({
//   selector: 'app',
//   template: `
//     <div class="modal-content">
//       <div class="modal-header">
//         <h4>Confirm</h4>
//       </div>
//       <div class="modal-body">
//         <p>Are you sure?</p>
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-primary" (click)="showConfirm()">Show confirm</button>
//       </div>
//     </div>
//   `
// })
// export class AppComponent {
//     constructor(private simpleModalService:SimpleModalService) {}
//     showConfirm() {
//         let disposable = this.simpleModalService.addModal(ConfirmComponent, {
//               title: 'Confirm title',
//               message: 'Confirm message'
//             })
//             .subscribe((isConfirmed)=>{
//                 //We get modal result
//                 if(isConfirmed) {
//                     alert('accepted');
//                 }
//                 else {
//                     alert('declined');
//                 }
//             });
//         //We can close modal calling disposable.unsubscribe();
//         //If modal was not closed manually close it by timeout
//         setTimeout(()=>{
//             disposable.unsubscribe();
//         },10000);
//     }
// }
















/*****KP : App-Component - Moved to MongoDBNoSqlComponent *****/
// @Component({
//   // /////KP : Demo-App : Selector & Template 
//   // selector: 'demo-app',
//   // template: `
//   // //   <h1>Angular 5 HttpClient Demo App</h1>

//   // //   <h3>Idols</h3>
//   // //   <ul>
//   // //     <li *ngFor="let idol of idols">{{idol}}</li>
//   // //   </ul>

//   // //   <h3>URIs</h3>
//   // //   <ul>
//   // //     <li *ngFor="let uri of kpUri">{{uri}}</li>
//   // //   </ul>

//   // //   <h3>Books</h3>
//   // //   <ul>
//   // //     <li *ngFor="let book of books">{{book.title}} : {{book.author}}</li>
//   // //   </ul>

//   // //   <h3>Foods</h3>
//   // //   <ul>
//   // //     <li *ngFor="let food of foods">{{food.id}} : {{food.name}}</li>
//   // //   </ul>

//   // //   <h3>Movies</h3>
//   // //   <ul>
//   // //     <li *ngFor="let movie of movies">{{movie.title}}</li>
//   // //   </ul>
//   // `,
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'KPNodeJSWebApp : Angular 6 : ng-App & MongoDB';
//   public foods;
//   public books;
//   public movies;
//   public kpUri;
//   public idols;
//   public heroes;
//   public heroesNonObs;
//   public customersAgeSorted;
//   public customers3Limit;

//   //constructor(private _demoService: DemoService) {}  
//   constructor(
//     private _demoService: DemoService, 
//     private _heroService: HeroService,
//     private _mongoDBNoSqlService: MongoDBNoSqlService
//   ) {}  

//   //KP : Additional ngOnInit() method add
//   ngOnInit() {
//     this.getIdols();
//     this.getkpUri();
//     this.getFoods();
//     this.getBooks();
//     this.getMovies();
//     this.getCustomersAgeSorted();
//     this.getCustomers3Limit();
//     //this.getHeroes();
//     //this.getHeroesNonObservable();
//   }

//    /***Hero Service : Service Methods ***/
//   getHeroesNonObservable() {
//     this._heroService.getHeroesNonObservable().subscribe(
//       data => { this.heroesNonObs = data },
//       err => console.error("KP : App-Component HeroService throwing errors : " + err),
//       () => console.log("KP : App-Component HeroService Done loading heroes!")
//     );
//   }

//   getHeroes() {
//   this._heroService.getHeroes().subscribe(
//     data => { this.heroes = data },
//     err => console.error("KP : App-Component HeroService throwing errors : " + err),
//     () => console.log("KP : App-Component HeroService Done loading heroes!")
//   );
//   }
//   /***Hero Service : Service Methods ***/

//   /***MongoDB Service : Service Methods ***/
//   getIdols() {
//     this._mongoDBNoSqlService.getIdols().subscribe(
//       data => {this.idols = data},
//       err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
//       () => console.log("KP : App-Component MongoDBService Done loading Idols!")
//     )
//   }

//   getFoods() {
//     this._mongoDBNoSqlService.getFoods().subscribe(
//       data => { this.foods = data },
//       err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
//       () => console.log("KP : App-Component MongoDBService Done loading foods!")
//     );
//   }

//   getBooks() {
//     this._mongoDBNoSqlService.getBooks().subscribe(
//       data => {this.books = data},
//       err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
//       () => console.log("KP : App-Component MongoDBService Done loading books!")
//     )
//   }

//   getMovies() {
//     this._mongoDBNoSqlService.getMovies().subscribe(
//       data => {this.movies = data},
//       err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
//       () => console.log("KP : App-Component MongoDBService Done loading movies!")
//     )
//   }

//   getCustomersAgeSorted(){
//     this._mongoDBNoSqlService.getCustomersAgeSorted().subscribe(
//       data => {this.customersAgeSorted = data},
//       err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
//       () => console.log("KP : App-Component MongoDBService Done loading Age Sorted Customers !")
//     )
//   };

//   getCustomers3Limit(){
//     this._mongoDBNoSqlService.getCustomers3Limit().subscribe(
//       data => {this.customers3Limit = data},
//       err => console.error("KP : App-Component MongoDBService throwing errors : " + err),
//       () => console.log("KP : App-Component MongoDBService Done loading Customers limited to 3 !")
//     )
//   }
//   // getkpUri() {
//   //   this._mongoDBNoSqlService.getkpUri().subscribe(
//   //     data => {this.kpUri = data},
//   //     err => console.error("KP : App-Component DemoService throwing errors : " + err),
//   //     () => console.log("KP : App-Component DemoService Done loading kpUri data elements!")
//   //   )
//   // }

//   // /***MongoDB Service : Service Methods ***/



//   /***Demo Service : Service Methods ***/
//   // getFoods() {
//   //     this._demoService.getFoods().subscribe(
//   //       data => { this.foods = data },
//   //       err => console.error("KP : App-Component DemoService throwing errors : " + err),
//   //       () => console.log("KP : App-Component DemoService Done loading foods!")
//   //     );
//   // }

//   // getBooks() {
//   //   this._demoService.getBooks().subscribe(
//   //     data => {this.books = data},
//   //     err => console.error("KP : App-Component DemoService throwing errors : " + err),
//   //     () => console.log("KP : App-Component DemoService Done loading books!")
//   //   )
//   // }

//   // getMovies() {
//   //   this._demoService.getMovies().subscribe(
//   //     data => {this.movies = data},
//   //     err => console.error("KP : App-Component DemoService throwing errors : " + err),
//   //     () => console.log("KP : App-Component DemoService Done loading movies!")
//   //   )
//   // }

//   getkpUri() {
//     this._demoService.getkpUri().subscribe(
//       data => {this.kpUri = data},
//       err => console.error("KP : App-Component DemoService throwing errors : " + err),
//       () => console.log("KP : App-Component DemoService Done loading kpUri data elements!")
//     )
//   }

//   // getIdols() {
//   //   this._demoService.getIdols().subscribe(
//   //     data => {this.idols = data},
//   //     err => console.error("KP : App-Component DemoService throwing errors : " + err),
//   //     () => console.log("KP : App-Component DemoService Done loading Idols!")
//   //   )
//   // }
//   /***Demo Service : Service Methods ***/

// }
/*****KP : App-Component - Moved to MongoDBNoSqlComponent *****/



/*****KP : App-Component - Hero Service *****/
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
/*****KP : App-Component - Hero Service *****/


/*****KP : App-Component - Demo Service *****/
// // KP : Original App-Component - Demo Service
// // import { Component } from '@angular/core';
// // import { DemoService } from '../services/demo.service';
// // //import { Observable } from 'rxjs/Observable';


// // @Component({
// //   //KP : selector: 'app-root',
// //   selector: 'demo-app',
// //   template: `
// //     <h1>Angular 5 HttpClient Demo App</h1>

// //     <h3>Idols</h3>
// //     <ul>
// //       <li *ngFor="let idol of idols">{{idol}}</li>
// //     </ul>

// //     <h3>URIs</h3>
// //     <ul>
// //       <li *ngFor="let uri of kpUri">{{uri}}</li>
// //     </ul>

// //     <h3>Books</h3>
// //     <ul>
// //       <li *ngFor="let book of books">{{book.title}} : {{book.author}}</li>
// //     </ul>

// //     <h3>Foods</h3>
// //     <ul>
// //       <li *ngFor="let food of foods">{{food.id}} : {{food.name}}</li>
// //     </ul>

// //     <h3>Movies</h3>
// //     <ul>
// //       <li *ngFor="let movie of movies">{{movie.title}}</li>
// //     </ul>
// //   `,
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {
// //   title = 'KPNodeJSWebApp : ng-App & MongoDB';
// //   public foods;
// //   public books;
// //   public movies;
// //   public kpUri;
// //   public idols;

// //   constructor(private _demoService: DemoService) {}  

// //   //KP : Additional ngOnInit() method add
// //   ngOnInit() {
// //     this.getIdols();
// //     this.getkpUri();
// //     this.getFoods();
// //     this.getBooks();
// //     this.getMovies();
// //   }

// //   getFoods() {
// //       this._demoService.getFoods().subscribe(
// //         data => { this.foods = data },
// //         err => console.error("KP : App-Component DemoService throwing errors : " + err),
// //         () => console.log("KP : App-Component DemoService Done loading foods!")
// //       );
// //   }

// //   getBooks() {
// //     this._demoService.getBooks().subscribe(
// //       data => {this.books = data},
// //       err => console.error("KP : App-Component DemoService throwing errors : " + err),
// //       () => console.log("KP : App-Component DemoService Done loading books!")
// //     )
// //   }

// //   getMovies() {
// //     this._demoService.getMovies().subscribe(
// //       data => {this.movies = data},
// //       err => console.error("KP : App-Component DemoService throwing errors : " + err),
// //       () => console.log("KP : App-Component DemoService Done loading movies!")
// //     )
// //   }

// //   getkpUri() {
// //     this._demoService.getkpUri().subscribe(
// //       data => {this.kpUri = data},
// //       err => console.error("KP : App-Component DemoService throwing errors : " + err),
// //       () => console.log("KP : App-Component DemoService Done loading kpUri data elements!")
// //     )
// //   }

// //   getIdols() {
// //     this._demoService.getIdols().subscribe(
// //       data => {this.idols = data},
// //       err => console.error("KP : App-Component DemoService throwing errors : " + err),
// //       () => console.log("KP : App-Component DemoService Done loading Idols!")
// //     )
// //   }
// // }
/*****KP : App-Component - Demo Service *****/
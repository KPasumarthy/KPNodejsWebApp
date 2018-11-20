import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';
//import { Observable } from 'rxjs/Observable';


@Component({
  //KP : selector: 'app-root',
  selector: 'demo-app',
  template: `
    <h1>Angular 5 HttpClient Demo App</h1>
    <h2>Foods</h2>
    <ul>
      <li *ngFor="let food of foods">{{food.name}}</li>
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KPNodeJSWebApp : ng-App ';
  public foods;
  constructor(private _demoService: DemoService) {}  


  //KP : Additional ngOnInit() method add
  ngOnInit() {
    this.getFoods();
  }

  getFoods() {
      this._demoService.getFoods().subscribe(
        data => { this.foods = data },
        err => console.error("KP : App-Component DemoService throwing errors : " + err),
        () => console.log("KP : Done loading foods")
      );
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

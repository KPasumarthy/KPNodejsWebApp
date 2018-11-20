import { Component, OnInit } from '@angular/core';
//KP : Additional Component added!!
import { Hero } from '../modules/hero';
import { HeroService } from '../services/hero.service';
//KP : Add additional MongoDBComponent added!!
import { MongodbService } from '../mongodb/mongodb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private heroService: HeroService
    ,private mongodbService: MongodbService
    ) { }

  ngOnInit() {
    this.getHeros();
    this.getMongoDB();
  }

  getHeros(): void {
    this.heroService.getHeroes()
        .subscribe(heros => this.heroes = heros.slice(1, 5));
  }

  getMongoDB(): void{
    this.mongodbService.kptest();
  }

}

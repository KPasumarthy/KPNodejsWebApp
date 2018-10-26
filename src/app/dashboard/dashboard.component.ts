import { Component, OnInit } from '@angular/core';
//KP : Additional Component added!!
import { Hero } from '../modules/hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeros();
  }

  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(heros => this.heroes = heros.slice(1, 5));
  }

}

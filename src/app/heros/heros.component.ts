import { Component, OnInit } from '@angular/core';
//KP : Import additionally built class files
import { Hero } from '../modules/hero';
import { HEROS } from '../modules/mock-heros';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HeroesComponent implements OnInit {

  //KP : Create 'hero' an object of 'Hero' Class during initialization process
  hero: Hero = {
    id: 1,
    name: 'Rama'
  }

  //KP : Component property 'heros' and expose HEROES Array for binding
  //heros = HEROS; 
  //heros: Hero[];
  heroes: Hero[];
  selectedHero : Hero;

  //Class Constructor to call Hero.Service
  //constructor() { }
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } 

  ///KP : Add methods Hero Service TypeScript Template WITH-OUT Observable 'rxjs' Data
  //getHeros() : void {
  //  this.heros = this.heroService.getHeros();
  //}
  getHeros() : void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes);
  }

}

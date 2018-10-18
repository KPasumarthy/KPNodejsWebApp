import { Component, OnInit } from '@angular/core';
//KP : Import additionally built class files
import { Hero } from '../hero';
import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  //KP : Create 'hero' an object of 'Hero' Class during initialization process
  hero: Hero = {
    id: 1,
    name: 'Rama'
  }

  //KP : Component property 'heros' and expose HEROES Array for binding
  heros = HEROS; 
  selectedHero : Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  } 
}

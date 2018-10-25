import { Injectable } from '@angular/core';
//KP : Import Components
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //constructor() { }
  constructor(private messageService: MessageService) { }

  ///KP : Add methods Hero Service TypeScript Template WITH-OUT Observable 'rxjs' Data
  // getHeros(): Hero[] {
  //   return HEROS;
  // }
  //KP : Add methods Hero Service TypeScript Template with Observable 'rxjs' Data
   getHeros(): Observable<Hero[]> {
     this.messageService.add('KP : HeroService: fetched heros');
     return of(HEROS);
   }

   //KP : getHero
   getHero(id: number): Observable<Hero> {
      //TODO: Send the message _after_ fetching the hero
      this.messageService.add("KP : HeroService: fetched hero id=${id}");
      return of(HEROS.find(hero => hero.id === id));
   }

}
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HeroesComponent } from '../heroes/heroes.component';
import { Hero } from '../modules/hero';
import { HttpClient } from '@angular/common/http';
import { Http } from  '@angular/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap} from 'rxjs/operators';
import * as express from 'express';

export class InMemoryDataService implements InMemoryDbService {

    
  constructor(
    private http: HttpClient
    ) { }
    
    createDb() {
        const heroes = [
            { id: 1,  name: 'Mr.Nice'},
            { id: 2,  name: 'Narco'},
            { id: 3,  name: 'Bombasto'},
            { id: 4,  name: 'Celeritas'},
            { id: 5,  name: 'Magneta'},
            { id: 6,  name: 'RubberMan'},
            { id: 7,  name: 'Dynama'},
            { id: 8,  name: 'Dr.IQ'},
            { id: 9,  name: 'Magma'},
            { id: 10, name: 'Tornado'},
            { id: 11, name: 'Mr.Nice'},
            { id: 12, name: 'Narco'},
            { id: 11, name: 'Washington'},
            { id: 12, name: 'Lincoln'},
            { id: 13, name: 'Franklin'},
            { id: 14, name: 'Hancock'},
            { id: 15, name: 'Gandhi'},
            { id: 16, name: 'Vivekananda'},
            { id: 17, name: 'BhagatSingh'},
            { id: 18, name: 'SubhasBose'},
            { id: 19, name: 'PingaliVenkayya'},
            { id: 20, name: 'TanguturiPrakasam'}
        ];
        return {heroes};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty, the method below returns the initial number (11),
    // If the heroes array is not empty, the method below returns the highest hero id + 1
    genId(heroes: Hero[]) : number {
            return HeroesComponent.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }

    kptest(): Observable <any> {
        console.log("KP : Here");
        return this.http.get(`http://localhost:2727/url`)
          .pipe(
            map((response: Response) => {
              console.log(response.json());
              return response.json();
            })
          );
      }
    
}
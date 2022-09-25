import { Injectable } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private msgSvc: MessageService) { }

  getHeroes():Observable<Hero[]>{
    const heroes = of(HEROES);
    this.msgSvc.add('HeroService: fetched heroes');
    return heroes;
  }

}

import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  selectedHero?: Hero;


  heroes:Hero[]=[];

  constructor(private heroSvc:HeroService, private msgSvc:MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }
  

  getHeroes(): void{
    this.heroSvc.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name:string): void{
    name=name.trim();
    if(!name){
      return;
    }

    this.heroSvc.addHero({name} as Hero)
    .subscribe((hero: Hero) => {
      this.heroes.push(hero);
    });
  }

  delete(hero:Hero): void{
    this.heroes= this.heroes.filter(h=>h!== hero);
    this.heroSvc.deleteHero(hero.id).subscribe();
  }

}

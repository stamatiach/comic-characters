import { Hero } from './data-models/hero.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeroService {

  heroes: Hero[] = [];
  batmanFamily: Hero[] = [];

  constructor() {  }

  public setHeroes(heroes: Hero[]) {
    this.heroes = heroes;
  }

  public getHeroes(): Hero[] {
    return this.heroes
  }

  public setBatmanFamily(heroes: Hero[]) {
    this.sortByName(heroes);
    this.heroes = heroes;
  }

  public getBatmanFamily(): Hero[] {  
    return this.heroes
  }

  public sortByName(heroes: Hero[]): Hero[] {
    return heroes.sort((a, b) => {
      return (a[name] > b[name]) ? 1 : -1; 
    });
  }

}
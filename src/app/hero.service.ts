import { Hero } from './data-models/hero.model';
import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

@Injectable({providedIn: 'root'})
export class HeroService {

  heroes: Hero[] = [];
  batmanFamily: Hero[] = [];
  ascending: boolean = true;

  constructor(private dialog: MatDialog) {  }

  public setHeroes(heroes: Hero[]) {
    this.heroes = heroes;
  }

  public getHeroes(): Hero[] {
    return this.heroes;
  }

  public setBatmanFamily(heroes: Hero[]) {
    this.batmanFamily = heroes;
  }

  public getBatmanFamily(): Hero[] {  
    this.sortByName(this.batmanFamily);
    return this.batmanFamily;
  }

  public getBatmanFamilyMember(id: string): Hero {
    for( let hero of this.batmanFamily) {
      if(hero.id === id) {
        return hero;
      }
    }
  }

  public getHero(id: string): Hero {
    for( let hero of this.heroes) {
      if(hero.id === id) {
        return hero;
      }
    }
    return this.getBatmanFamilyMember(id);
  }

  public sortByName(heroes: Hero[]) {
    if (this.ascending) {
      this.ascending = false;
      heroes.sort((a: Hero, b: Hero) => {
        return (a.name > b.name) ? 1 : -1; 
       });
    }
  }

  public editHero(heroToEdit: Hero) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '850px';
    dialogConfig.width = '890px';
    dialogConfig.data = {hero: heroToEdit};
    this.dialog.open(EditHeroComponent, dialogConfig);
  }

  public addNewMember() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '850px';
    dialogConfig.width = '890px';
    this.dialog.open(EditHeroComponent, dialogConfig);
  }

}
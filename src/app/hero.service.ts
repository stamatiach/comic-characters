import { Hero } from './data-models/hero.model';
import { Injectable } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

@Injectable({providedIn: 'root'})
export class HeroService {

  heroes: Hero[] = [];
  batmanFamily: Hero[] = [];

  constructor(private dialog: MatDialog) {  }

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
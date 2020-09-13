import { Component, OnInit, Inject, ViewChild, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Hero } from '../data-models/hero.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  heroForm: FormGroup;
  editMode: boolean

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private heroService: HeroService) { }

  ngOnInit(): void { 
    this.editMode = this.data !== null;
    this.initForm();
  }

  private initForm() {
    let heroName = '';
    let fullName = '';
    let alterEgos = '';
    let placeOfBirth = '';
    let occupation = '';
    let imagePath= 'assets/images/img_placeholder.png';
    let intelligence = '';
    let durability = '';
    let strength = '';
    let speed = '';
    let power = '';
    let combat = '';
    if(this.editMode) {
      let hero = this.heroService.getHero(this.data.hero.id);
      heroName = hero.name;
      fullName = hero.biography.fullName;
      alterEgos = hero.biography.alterEgos
      placeOfBirth = hero.biography.placeOfBirth
      occupation = hero.work.occupation
      imagePath= hero.image.url;
      intelligence = hero.powerstats.intelligence
      durability = hero.powerstats.durability
      strength = hero.powerstats.strength
      speed = hero.powerstats.speed
      power = hero.powerstats.power
      combat = hero.powerstats.combat
    }
    this.heroForm = new FormGroup({
      heroName: new FormControl(heroName),
      secretId: new FormControl(fullName),
      alterEgos: new FormControl(alterEgos),
      birthPlacce: new FormControl(placeOfBirth),
      occupation: new FormControl(occupation),
      imagePath: new FormControl(imagePath),
      intelligence: new FormControl(intelligence),
      durability: new FormControl(durability),
      strength: new FormControl(strength),
      speed: new FormControl(speed),
      power: new FormControl(power),
      combat: new FormControl(combat)
    })
  }
}

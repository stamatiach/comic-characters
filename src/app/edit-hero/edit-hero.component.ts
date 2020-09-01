import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../data-models/hero.model';
import { NgForOf } from '@angular/common';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  editHeroForm = new FormGroup({
    heroName: new FormControl(''),
    secretId: new FormControl(''),
    alterEgos: new FormControl(''),
    birthPlacce: new FormControl(''),
    occupation: new FormControl(''),
    imagePath: new FormControl(''),
    intelligence: new FormControl(''),
    durability: new FormControl(''),
    strength: new FormControl(''),
    speed: new FormControl(''),
    power: new FormControl(''),
    combat: new FormControl(''),
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void { 
    
   }

   ngAfterContentInit(): void {  
      this.editHeroForm.patchValue({
        heroName: this.data.hero.name,
        secretId: this.data.hero.biography.fullName,
        alterEgos: this.data.hero.biography.alterEgos,
        birthPlacce: this.data.hero.biography.placeOfBirth,
        occupation: this.data.hero.work.occupation,
        imagePath: this.data.hero.image.url,
        intelligence: this.data.hero.powerstats.intelligence,
        durability: this.data.hero.powerstats.durability,
        strength: this.data.hero.powerstats.strength,
        speed: this.data.hero.powerstats.speed,
        power: this.data.hero.powerstats.power,
        combat: this.data.hero.powerstats.combat
      });
   }

  onSubmit(){
    
  }

}

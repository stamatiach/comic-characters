import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../data-models/hero.model';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.css']
})
export class EditHeroComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Hero) { }

  ngOnInit(): void {  }

}

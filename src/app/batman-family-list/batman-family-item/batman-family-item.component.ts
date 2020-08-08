import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/data-models/hero.model';

@Component({
  selector: 'app-batman-family-item',
  templateUrl: './batman-family-item.component.html',
  styleUrls: ['./batman-family-item.component.css']
})
export class BatmanFamilyItemComponent implements OnInit {

  @Input() member: Hero;

  constructor() { }

  ngOnInit(): void { }

}

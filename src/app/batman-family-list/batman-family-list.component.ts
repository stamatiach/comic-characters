import { Component, OnInit } from '@angular/core';
import { Hero } from '../data-models/hero.model';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-batman-family-list',
  templateUrl: './batman-family-list.component.html',
  styleUrls: ['./batman-family-list.component.css']
})
export class BatmanFamilyListComponent implements OnInit {

  batmanFamilyMembers: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.batmanFamilyMembers = this.heroService.getBatmanFamily();
  }

  onAddNewMember() {
    this.heroService.addNewMember();
  }

}

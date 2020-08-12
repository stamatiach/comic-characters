import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { DataClientService } from '../data-client.service';
import { Hero } from '../data-models/hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService, private client: DataClientService) { }

  ngOnInit(): void {
    this.client.fetchHeroes();
    this.heroes = this.heroService.getHeroes();
  }

}
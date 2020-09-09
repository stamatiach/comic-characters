import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/data-models/hero.model';
import { HeroService } from 'src/app/hero.service';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.css']
})
export class HeroItemComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {

  }

  onEditHero(){
    this.heroService.editHero(this.hero);
  }

}

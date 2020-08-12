import { HttpClient } from '@angular/common/http';
import { HeroService } from './hero.service';
import { Hero } from './data-models/hero.model';
import { Injectable } from '@angular/core';
import { map , tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataClientService {
 
  batmanFamilyIds = [17, 58, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 505, 546, 549, 561, 562, 563, 564, 565];

  constructor(private http: HttpClient, private heroService: HeroService) {}

  fetchBatmanFamily() {
    const responseData = [];
    this.batmanFamilyIds.forEach(index => {
      this.http.get<Hero>('https://www.superheroapi.com/api.php/10222869036332459/' + index)
      .pipe( tap((response) => {
        response.biography.fullName = response["biography"]["full-name"];
      })
      )
      .subscribe( response => {
        responseData.push(response);
      });      
    });
    this.heroService.setBatmanFamily(responseData);
  }

  fetchHeroes() {
    const responseData = [] ;
    let hero: Hero;
    for (let index = 1; index <731; index ++) {
      if (!this.batmanFamilyIds.includes(index)) {
        this.http.get<Hero>('https://www.superheroapi.com/api.php/10222869036332459/' + index)
        .pipe( tap((response) => {
          response.biography.fullName = response["biography"]["full-name"];
      })
      )
      .subscribe(response => {
        if(response.biography.publisher.includes('DC') && response.biography.alignment === 'good'){
          responseData.push(response);  
        }
      });
      }
    }
    this.heroService.setHeroes(responseData);
  }

}
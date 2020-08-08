import { HttpClient } from '@angular/common/http';
import { HeroService } from './hero.service';
import { Hero } from './data-models/hero.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class DataClientService {
 
  constructor(private http: HttpClient, private heroService: HeroService) {}

  fetchBatmanFamily() {
    let responseData = [];
    const batmanFamilyIds = [17, 58, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 505, 546, 549, 561, 562, 563, 564, 565];
    batmanFamilyIds.forEach(index => {
      this.http.get<Hero>('https://www.superheroapi.com/api.php/10222869036332459/' + index)
      .subscribe( response => {
        responseData.push(response);
        console.log(response);
      });      
    });
    this.heroService.setBatmanFamily(responseData);
  }

}
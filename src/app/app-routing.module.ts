import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BatmanFamilyListComponent } from './batman-family-list/batman-family-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { MapComponent } from './map/map.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const appRoutes: Routes = [
  {path: '', component: WelcomePageComponent},
  {path: 'family', component: BatmanFamilyListComponent},
  {path: 'heroes', component: HeroListComponent},
  {path: 'map', component: MapComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
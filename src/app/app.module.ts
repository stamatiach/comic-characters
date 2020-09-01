import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';

import { HeaderComponent } from './header/header.component';
import { BatmanFamilyListComponent } from './batman-family-list/batman-family-list.component';
import { BatmanFamilyItemComponent } from './batman-family-list/batman-family-item/batman-family-item.component';
import { HeroListComponent} from './hero-list/hero-list.component';
import { HeroItemComponent } from './hero-list/hero-item/hero-item.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { MapComponent } from './map/map.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BatmanFamilyListComponent,
    BatmanFamilyItemComponent,
    HeroListComponent,
    HeroItemComponent,
    EditHeroComponent,
    MapComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatExpansionModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditHeroComponent]
})
export class AppModule { }

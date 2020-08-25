import { Component, OnInit } from '@angular/core';
import { Hero } from '../data-models/hero.model';
import { HeroService } from '../hero.service';
import { DataClientService } from '../data-client.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditHeroComponent } from '../edit-hero/edit-hero.component';


@Component({
  selector: 'app-batman-family-list',
  templateUrl: './batman-family-list.component.html',
  styleUrls: ['./batman-family-list.component.css']
})
export class BatmanFamilyListComponent implements OnInit {

  batmanFamilyMembers: Hero[];
  constructor(private dataClient: DataClientService, private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataClient.fetchBatmanFamily();
    this.batmanFamilyMembers = this.heroService.getBatmanFamily();
    console.log(this.batmanFamilyMembers);
  }

  onAddNewMember() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.height = '800px';
    dialogConfig.width = '850px';
    this.dialog.open(EditHeroComponent, dialogConfig);
  }

}

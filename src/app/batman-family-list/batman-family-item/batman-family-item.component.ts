import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'src/app/data-models/hero.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EditHeroComponent } from 'src/app/edit-hero/edit-hero.component';

@Component({
  selector: 'app-batman-family-item',
  templateUrl: './batman-family-item.component.html',
  styleUrls: ['./batman-family-item.component.css']
})
export class BatmanFamilyItemComponent implements OnInit {

  @Input() member: Hero;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void { }

  onEditHero(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "800px";
    dialogConfig.height = "800px";
    dialogConfig.data = {hero: this.member};
    this.dialog.open(EditHeroComponent, dialogConfig);
  }
}

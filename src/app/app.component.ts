import { Component, OnInit } from '@angular/core';
import { DataClientService } from './data-client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'comic-characters';

  constructor(private dataClient: DataClientService) { }

  ngOnInit() {
    this.dataClient.fetchBatmanFamily();
    this.dataClient.fetchHeroes();
  }
}

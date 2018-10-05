import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  first: number;
  second: number;
  result: number;

  constructor() {
    this.first = 0;
    this.second = 0;
    this.result = 0;
  }
}

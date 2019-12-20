import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  odd = [];
  even = [];

  onSecondPassed(second: number) {
    if (second % 2 === 0) {
      this.even.push(second);
    } else {
      this.odd.push(second);
    }
  }
}

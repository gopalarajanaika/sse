import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sse';
  toggleBbOne:boolean = true;
  toggleBbTwo:boolean = true;
  toggleBbThree:boolean = true;
  toggleBbFour:boolean = true;

  toggleButtonBox(boxName) {
    this[boxName] = !this[boxName];
    }
}

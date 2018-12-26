import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  columns: string[] = ["Nodes", "Column 1", "Column 2", "Column 3"];

  getRandomNumber() {
    return Math.round(Math.random() * 10000);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  intro =
    'https://github.com/12KylaNoob/DoItNow/blob/main/smartphone.png?raw=true';
  openUrl(url: string) {
    window.open(url);
  }
}

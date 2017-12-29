import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<todo></todo>'
})
export class AppComponent {
  title: string = 'My Application';
  name = 'Badmus Seyi';

}

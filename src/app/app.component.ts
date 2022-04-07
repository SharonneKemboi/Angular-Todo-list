import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  title(_title: any) {
    throw new Error('Method not implemented.');
  }
}

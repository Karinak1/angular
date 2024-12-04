import { Component } from '@angular/core';
import { createUrlTreeFromSnapshot, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header />
    <main><router-outlet /></main>
  `,
  styles: [
    `
      main {
        padding: 16px;
        // background-color: tomato;
      }
    `,
  ],
})
export class AppComponent {
  title = 'angular-doc';
}
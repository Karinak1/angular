import { Component } from '@angular/core';
import { createUrlTreeFromSnapshot, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CounterComponent],
  template: `
    <app-header />
    <main><router-outlet /></main>
    <app-counter />
  `,
})
export class AppComponent {
  title = 'angular-doc';
}

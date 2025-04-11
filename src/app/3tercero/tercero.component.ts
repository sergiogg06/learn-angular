import { Component } from '@angular/core';

@Component({
  selector: 'app-tercero',
  template: `
    Username: {{ username }}
  `,
})
export class TerceroComponent {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  template: `<section><app-tercero /></section>`,
  imports: [TerceroComponent],
})
export class AppComponent {}
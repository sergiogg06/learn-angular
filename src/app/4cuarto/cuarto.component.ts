import { Component } from '@angular/core';

@Component({
  selector: 'app-cuarto',
  imports: [],
  template: `
    @if (isLoggedIn) {
      <p>Welcome back, Friend!</p>
    } @else {
     span>No login. Users:</span>
  `,
  styles: ``
})
export class CuartoComponent {
  isLoggedIn = true;
}

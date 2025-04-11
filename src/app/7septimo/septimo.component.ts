import { Component } from '@angular/core';

@Component({
  selector: 'app-septimo',
  imports: [],
  template: `
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
  `,
  styles: ``
})
export class SeptimoComponent {
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }
}

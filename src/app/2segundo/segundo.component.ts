import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo',
  imports: [],
  template: `Hello {{ city }}, {{ 1 + 1 }}`,
  styles: ``
})
export class SegundoComponent {
  city = 'San Francisco';
}

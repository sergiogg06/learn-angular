import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-octavo',
  imports: [],
  template: `
   <p>The user's occupation is {{occupation}}</p>
  `,
  styles: ``
})
export class OctavoComponent {
  @Input() name = '';
}

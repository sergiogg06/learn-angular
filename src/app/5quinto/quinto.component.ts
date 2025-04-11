import { Component } from '@angular/core';

@Component({
  selector: 'app-quinto',
  imports: [],
  template: `
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
  `,
  styles: ``
})
export class QuintoComponent {
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
}

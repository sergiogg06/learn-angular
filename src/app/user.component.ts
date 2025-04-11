import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-user',
    template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/assets/logo.svg" alt="Angular logo" width="32" height="32" />
      </li>
      <li>
        Dynamic Image:
        <img [ngsrc]="logoUrl" [alt]="logoAlt" width="32" height="32"  />
      </li>
    </ul>
  `,
  })
  export class UserComponent {
    @Input() username = 'Sergio';
    logoUrl = '/assets/logo.svg';
    logoAlt = 'Angular logo';
  }
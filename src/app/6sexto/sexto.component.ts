import { Component } from '@angular/core';

@Component({
  selector: 'app-sexto',
  imports: [],
 template: `<div [contentEditable]="isEditable"></div>`,
})
export class SextoComponent {
  isEditable = true;
}

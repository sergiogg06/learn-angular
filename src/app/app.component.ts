import {Component} from '@angular/core';
import {UserComponent} from './user.component';
import { TerceroComponent } from './3tercero/tercero.component';
import { OctavoComponent } from './8octavo/octavo.component';
import { NovenoComponent } from './9noveno/noveno.component';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
  @if (isUserLogin) {
    <span><app-user username="Luisa" /></span>
    <section (mouseover)="onMouseOver()">
      There's a secret message for you, hover to reveal 👀
      {{ message }}
    </section>
    } @else {
    <span>No Login. Users:</span>
    <div> 
    @for(user of users; track user.id) {
    <p>{{user.id}}. {{ user.name }}</p>
    }
    </div>
    <div class="divEditable" [contentEditable]="isEditable"></div>
    } 
    <span><app-user name="Sergio"></app-user></span>
    <app-noveno (addItemEvent)="addItem($event)" />
    @defer (on viewport) {
      <app-decimo />
    }@placeholder {
      <p>Future comments</p>
    } @loading (minimum 2s){
      <p>Loading comments...</p>
    }
  `,
  imports: [TerceroComponent],
})
export class AppComponent {
isUserLogin= true;
users = [
  {id: 0, name: 'Sarah'},
  {id: 1, name: 'Amy'},
  {id: 2, name: 'Rachel'},
  {id: 3, name: 'Jessica'},
  {id: 4, name: 'Poornima'},
];
isEditable = false;  
message  = '';

onMouseOver() {
  this.message = 'Way to go 🚀';
}
}

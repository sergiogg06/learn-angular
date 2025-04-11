import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-noveno',
  styles: `.btn { padding: 5px; }`,
  template: `
    <button class="btn" (click)="addItem()">Add Item</button>
  `,
})
export class NovenoComponent {
  addItemEvent: EventEmitter<string> = new EventEmitter<string>();
  addItem() {
    this.addItemEvent.emit('🐢');
  }
}

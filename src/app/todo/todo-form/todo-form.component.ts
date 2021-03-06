/* Core */
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() add = new EventEmitter();
  @Input() content: string;
}

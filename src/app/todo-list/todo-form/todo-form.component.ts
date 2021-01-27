import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output()
  emitTodoForm: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  todoForm = new FormGroup({
    title: new FormControl(''),
    limit_date: new FormControl('')
  });

  ngOnInit(): void {
  }

  addTodoList(): void {
    this.emitTodoForm.emit(this.todoForm.getRawValue());
  }

}

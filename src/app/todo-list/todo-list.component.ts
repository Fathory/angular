import { Component, OnInit } from '@angular/core';
import { EntityCollectionService, EntityServices } from '@ngrx/data';
import { Todo } from './todo-list.constant';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoCollectionService: EntityCollectionService<Todo>;

  constructor(
    private entityService: EntityServices) {
    this.todoCollectionService = entityService.getEntityCollectionService(
      'todoItems'
    );
  }

  ngOnInit(): void {
  }

  formToList($event): void {
    console.log($event);
    this.todoCollectionService.addOneToCache($event);

    this.todoCollectionService.entities$.subscribe(data => {
      console.log({ data });
    });
  }
}

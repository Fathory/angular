import { Injectable } from '@angular/core';
import { EntityCollectionService, EntityServices } from '@ngrx/data';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoItemCollectionService: EntityCollectionService<any>;
  constructor(private entityService: EntityServices) {
    this.todoItemCollectionService = this.entityService.getEntityCollectionService('todoItems');
  }
  addTodoList($form): void {
    this.todoItemCollectionService.addOneToCache($form);
  }
}

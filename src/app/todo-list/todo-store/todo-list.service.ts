import {Injectable} from '@angular/core';
import {EntityCollectionService, EntityServices} from '@ngrx/data';
import {Todo} from '../todo-list.constant';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  todoItemCollectionService: EntityCollectionService<Todo>;
  doneItemCollectionService: EntityCollectionService<Todo>;

  constructor(private entityService: EntityServices) {
    this.todoItemCollectionService = this.entityService.getEntityCollectionService('todoItems');
    this.doneItemCollectionService = this.entityService.getEntityCollectionService('doneItems');
  }
}

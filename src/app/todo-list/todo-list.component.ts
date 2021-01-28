import {Component, OnInit} from '@angular/core';
import {EntityCollectionService, EntityServices} from '@ngrx/data';
import {Todo} from './todo-list.constant';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoCollectionService: EntityCollectionService<Todo>;
  doneCollectionService: EntityCollectionService<Todo>;

  constructor(
    private entityService: EntityServices) {
    this.todoCollectionService = entityService.getEntityCollectionService(
      'todoItems'
    );
    this.doneCollectionService = entityService.getEntityCollectionService(
      'doneItems'
    );
  }

  ngOnInit(): void {
  }

  formToList(todoItem: Todo): void {
    this.todoCollectionService.entities$.subscribe((todoList) => {
      const isExist = todoList.find(item =>
        item.title === todoItem.title
      );
      console.log(isExist);
    });
    this.todoCollectionService.addOneToCache(todoItem);
  }

  removeTodo(todoItem: Todo): void {
    this.doneCollectionService.removeOneFromCache(todoItem);
  }
}

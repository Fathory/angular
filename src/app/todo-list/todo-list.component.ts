import {Component, OnInit} from '@angular/core';
import {EntityCollectionService, EntityServices} from '@ngrx/data';
import {Todo} from './todo-list.constant';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoCollectionService: EntityCollectionService<Todo>;
  doneCollectionService: EntityCollectionService<Todo>;
  allCollectionService: EntityCollectionService<Todo>;

  constructor(
    private entityService: EntityServices) {
    this.allCollectionService = entityService.getEntityCollectionService(
      'allItems'
    );
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
    this.allCollectionService.entities$.pipe(first()).subscribe((allList) => {
      const cloneTodo = {...todoItem};
      let id = 0;
      if (cloneTodo) {
        id = allList.length + 1;
      }
      cloneTodo.id = id;
      cloneTodo.done = false;
      this.allCollectionService.addOneToCache(cloneTodo);
      this.setTodoAndDone();
    });
  }

  setTodoAndDone(): void {
    this.allCollectionService.entities$.subscribe(allList => {
      this.todoCollectionService.clearCache();
      this.doneCollectionService.clearCache();
      if (allList.length !== 0){
        let todoList: Todo[];
        let doneList: Todo[];
        doneList = allList.filter(list => list.done);
        todoList = allList.filter(list => !list.done);
        this.todoCollectionService.addManyToCache(todoList);
        this.doneCollectionService.addManyToCache(doneList);
      }
    });
  }
}

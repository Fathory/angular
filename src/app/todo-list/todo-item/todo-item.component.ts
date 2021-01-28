import {Component, Input, OnInit} from '@angular/core';
import {EntityCollectionService} from '@ngrx/data';
import {Todo} from '../todo-list.constant';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input()
  todoCollectionService: EntityCollectionService<Todo>;
  @Input()
  doneCollectionService: EntityCollectionService<Todo>;
  @Input()
  allCollectionService: EntityCollectionService<Todo>;

  todoList: Todo[];
  constructor() {
  }

  ngOnInit(): void {
    this.todoCollectionService.entities$.subscribe(todoList => {
      this.todoList = todoList;
    });
  }

  moveToDone(todoItem: Todo): void {
    todoItem.done = true;
    this.allCollectionService.upsertOneInCache(todoItem);
  }
  removeTodo(todoItem: Todo): void {
    if (confirm(`할 일 '${todoItem.title}'을 삭제할까요?`)) {
      this.allCollectionService.removeOneFromCache(todoItem);
    }
  }

}

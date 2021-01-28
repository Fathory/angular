import {Component, Input, OnInit} from '@angular/core';
import {EntityCollectionService} from '@ngrx/data';
import {Todo} from '../todo-list.constant';

@Component({
  selector: 'app-done-item',
  templateUrl: './done-item.component.html',
  styleUrls: ['./done-item.component.css']
})
export class DoneItemComponent implements OnInit {
  @Input()
  todoCollectionService: EntityCollectionService<Todo>;
  @Input()
  doneCollectionService: EntityCollectionService<Todo>;

  doneList: Todo[];

  constructor() {
  }

  ngOnInit(): void {
    this.doneCollectionService.entities$.subscribe(doneList => {
      this.doneList = doneList;
    });
  }

  moveToTodo(doneItem: Todo): void {
    this.doneCollectionService.removeOneFromCache(doneItem);
    this.todoCollectionService.addOneToCache(doneItem);
  }

  removeTodo(doneItem: Todo): void {
    if (confirm(`할 일 '${doneItem.title}'을 삭제할까요?`)) {
      this.doneCollectionService.removeOneFromCache(doneItem);
    }
  }
}

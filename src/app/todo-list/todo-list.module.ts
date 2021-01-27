import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TodoItemModule } from './todo-item/todo-item.module';
import { DoneItemModule } from './done-item/done-item.module';
import { TodoFormModule } from './todo-form/todo-form.module';
import {
  todoListServiceConfig,
  todoListMetadata
} from './todo-store/todo-list-entity-metadata';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [TodoListComponent],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoItemModule,
    DoneItemModule,
    TodoFormModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({
      entityMetadata: todoListMetadata
    })
  ],
  providers: [
    {
      provide: DefaultDataServiceConfig,
      useValue: todoListServiceConfig
    }
  ]
})
export class TodoListModule {
}

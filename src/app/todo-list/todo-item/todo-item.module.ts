import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from './todo-item.component';



@NgModule({
    declarations: [TodoItemComponent],
    exports: [
        TodoItemComponent
    ],
    imports: [
        CommonModule
    ]
})
export class TodoItemModule { }

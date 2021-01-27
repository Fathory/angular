import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from './todo-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TodoFormComponent],
  exports: [
    TodoFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TodoFormModule { }
